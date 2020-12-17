using SenaiVagasAPI.Contexts;
using SenaiVagasAPI.Domains;
using SenaiVagasAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiVagasAPI.Repositories
{
    public class FormaContratacaoRepository : IFormaContratacaoRepository
    {
        ContextBd ctx = new ContextBd();

        List<FormaContratacao> IFormaContratacaoRepository.Listar()
        {
            return ctx.FormaContratacao.ToList();
        }
    }
}