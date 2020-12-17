using SenaiVagasAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiVagasAPI.Interfaces
{
    interface IFormaContratacaoRepository
    {
        List<FormaContratacao> Listar();
    }
}
