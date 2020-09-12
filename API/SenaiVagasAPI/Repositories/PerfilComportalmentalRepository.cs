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

        public async Task<PerfilComportamental> Alterar(PerfilComportamental perfil)
        {
            using (ContextBd _contexto = new ContextBd())
            {
                
                _contexto.Entry(perfil).State = EntityState.Modified;
                await _contexto.SaveChangesAsync();
            }
            return perfil;
        }

        public async Task<PerfilComportamental> BuscarPorId(int id)
        {
            using (ContextBd _contexto = new ContextBd())
            {
                var perfil = await _contexto.PerfilComportamental.FirstOrDefaultAsync(o => o.IdPerfilComportamental == id);
                return await _contexto.PerfilComportamental.FindAsync(id);
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
