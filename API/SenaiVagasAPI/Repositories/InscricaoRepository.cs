using SenaiVagasAPI.Contexts;
using SenaiVagasAPI.Domains;
using SenaiVagasAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiVagasAPI.Repositories
{
    public class InscricaoRepository : IInscricaoRepository
    {
        ContextBd ctx = new ContextBd();


        public List<Inscricao> Listar()
        {            
            return ctx.Inscricao
                .Include(e => e.FkCandidatoNavigation)

                .Include(e => e.IdVagaNavigation)


                .ToList();
        }

        public Inscricao BuscarPorId(int id)
        {
            Inscricao inscricaoBuscada = ctx.Inscricao

                .Include(e => e.FkCandidatoNavigation)
                .Include(e => e.IdInstituicaoNavigation);
               

            if (inscricaoBuscada != null)
            {
                return inscricaoBuscada;
            }
            return null;
        }

        public void Cadastrar(Inscricao novaInscricao)
        {

            ctx.Inscricao.Add(novaInscricao);

            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            ctx.Inscricao.Remove(BuscarPorId(id));

            ctx.SaveChanges();
        }



    }
}
