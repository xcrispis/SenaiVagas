﻿using SenaiVagasAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiVagasAPI.Interfaces
{
    interface IPerfilComportamental
    {
        Task<List<PerfilComportamental>> Listar();

        Task<PerfilComportamental> BuscarPorId(int id);

        Task<PerfilComportamental> Salvar(PerfilComportamental oferta);

        Task<PerfilComportamental> Alterar(PerfilComportamental oferta);
    }
}
