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
    public class PerfilComportamentalRepository : IPerfilComportamental
    {

        public  PerfilComportamental Alterar(int id, PerfilComportamental perfil)
        {
            using (ContextBd _contexto = new ContextBd())
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
            return perfil;
        }

        public  PerfilComportamental BuscarPorId(int id)
        {
            using (ContextBd _contexto = new ContextBd())
            {
                return  _contexto.PerfilComportamental.FirstOrDefault(p => p.IdPerfilComportamental == id);
            }
        }

        public async Task<List<PerfilComportamental>> Listar()
        {
            using (ContextBd _contexto = new ContextBd())
            {
                var ofertas = await _contexto.PerfilComportamental.ToListAsync();
                return await _contexto.PerfilComportamental.ToListAsync();
            }
        }

        public async Task<PerfilComportamental> Salvar(PerfilComportamental perfil)
        {
            using (ContextBd _contexto = new ContextBd())
            {
                
                await _contexto.AddAsync(perfil);
                await _contexto.SaveChangesAsync();
                return perfil;
            }
        }

       

    }
}
