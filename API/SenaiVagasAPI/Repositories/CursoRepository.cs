using SenaiVagasAPI.Contexts;
using SenaiVagasAPI.Domains;
using SenaiVagasAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;


namespace SenaiVagasAPI.Repositories
{
    public class CursoRepository : ICurso
    {
        public Curso Alterar(int id, Curso curso)
        {
            using (ContextBd _contexto = new ContextBd())
            {
                Curso cursosNew =  BuscarPorId(id);
                if (cursosNew.Titulo != null)
                    cursosNew.Titulo = curso.Titulo;
        
                _contexto.Curso.Update(cursosNew);
                _contexto.SaveChanges();
            }
            return curso;
        }

        public  Curso BuscarPorId(int id)
        {
            using (ContextBd _contexto = new ContextBd())
            {
                return _contexto.Curso.FirstOrDefault(p => p.IdCursos == id);
            }
        }

        public  Curso Excluir(Curso curso)
        {
            using (ContextBd _contexto = new ContextBd())
            {
                _contexto.Curso.Remove(curso);
                 _contexto.SaveChanges();
                return curso;
            }
        }

        public async Task<List<Curso>> Listar()
        {
            using (ContextBd _contexto = new ContextBd())
            {
                return await _contexto.Curso.ToListAsync();
            }
        }

        public async Task<Curso> Salvar(Curso curso)
        {
            using (ContextBd _contexto = new ContextBd())
            {
                await _contexto.AddAsync(curso);               
                await _contexto.SaveChangesAsync();
            }
            return curso;
        }
    }
}
    

