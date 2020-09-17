using Microsoft.EntityFrameworkCore;
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
            return ctx.Inscricao.Include(I => I.IdVagaNavigation).Include(I => I.FkCandidatoNavigation).ToList();
        }

        public Inscricao BuscarPorId(int id)
        {
            return ctx.Inscricao
                .Include(e => e.FkCandidatoNavigation)
                .Include(e => e.IdVagaNavigation).FirstOrDefault(i => i.IdInscricao == id);
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
