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
    public class PerfilComportamentalRepository : IPerfilComportamentalRepository
    {
        ContextBd _contexto = new ContextBd();

        public void Alterar(int id, PerfilComportamental perfil)
        {
            PerfilComportamental perfilComp = BuscarPorId(id);
            if (perfil.Gato != null)
                perfilComp.Gato = perfil.Gato;
            if (perfil.Lobo != null)
                perfilComp.Lobo = perfil.Lobo;
            if (perfil.Tubarao != null)
                perfilComp.Tubarao = perfil.Tubarao;
            if (perfil.Aguia != null)
                perfilComp.Aguia = perfil.Aguia;
            _contexto.PerfilComportamental.Update(perfilComp);
            _contexto.SaveChanges();
        }

        public PerfilComportamental BuscarPorId(int id)
        {
            return _contexto.PerfilComportamental.FirstOrDefault(p => p.IdPerfilComportamental == id);
        }

        public List<PerfilComportamental> Listar()
        {
            return _contexto.PerfilComportamental.ToList();
        }

        public void Salvar(PerfilComportamental perfil)
        {
            _contexto.Add(perfil);
            _contexto.SaveChanges();
        }



    }
}
