using SenaiVagasAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiVagasAPI.Interfaces
{
    interface IPerfilComportamental
    {
        Task<List<PerfilComportamental>> Listar();

        PerfilComportamental BuscarPorId(int id);

        Task<PerfilComportamental> Salvar(PerfilComportamental oferta);

        PerfilComportamental Alterar(int id, PerfilComportamental oferta);
    }
}
