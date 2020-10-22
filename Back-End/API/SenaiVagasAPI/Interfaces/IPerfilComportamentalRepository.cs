using SenaiVagasAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiVagasAPI.Interfaces
{
    interface IPerfilComportamentalRepository
    {
        List<PerfilComportamental> Listar();

        PerfilComportamental BuscarPorId(int id);

        void Salvar(PerfilComportamental perfil);

        void Alterar(int id, PerfilComportamental perfil);
    }
}
