using SenaiVagasAPI.Contexts;
using SenaiVagasAPI.Domains;
using SenaiVagasAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiVagasAPI.Repositories
{
    public class DicaRepository : IDicasRepository 
    {

        ContextBd ctx = new ContextBd();

        public void Atualizar(int id, Dicas dicaAtualizada)
        {
            Dicas dicaBuscada = ctx.Dicas.Find(id);
          
            if (dicaBuscada != null)
            {
                if (dicaAtualizada.Titulo != null)
                {
                    dicaBuscada.Titulo = dicaAtualizada.Titulo;
                }

                if (dicaAtualizada.Descricao != null)
                {
                    dicaBuscada.Descricao = dicaAtualizada.Descricao;
                }

                if (dicaAtualizada.Link != null)
                {
                    dicaBuscada.Link = dicaAtualizada.Link;
                }
                
                // Atualiza os dados da dica que foi buscada
                ctx.Dicas.Update(dicaBuscada);

                // Salva as informações para serem gravadas no banco
                ctx.SaveChanges();
            }
        }

        public Dicas BuscarPorId(int id)
        {
            Dicas dicaBuscada = ctx.Dicas.Find(id);

            if (dicaBuscada != null)
            {
                return dicaBuscada;
            }
            return null;
        }

        public void Cadastrar(Dicas novaDica)
        {
            
            ctx.Dicas.Add(novaDica);

            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            ctx.Dicas.Remove(BuscarPorId(id));

            ctx.SaveChanges();
        }

        public List<Dicas> Listar()
        {         
            return ctx.Dicas.ToList();
        }
    }
}
