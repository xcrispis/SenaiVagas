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
    public class CursoRepository : ICursoRepository

    {
        ContextBd _contexto = new ContextBd();
        public void Alterar(int id, Curso curso)
        {
            Curso cursosNew = BuscarPorId(id);
            if (cursosNew.Titulo != null)
                cursosNew.Titulo = curso.Titulo;
            _contexto.Curso.Update(cursosNew);
            _contexto.SaveChanges();
        }

        public Curso BuscarPorId(int id)
        {
            return _contexto.Curso.FirstOrDefault(p => p.IdCursos == id);
        }

        public void Excluir(int id)
        {
            _contexto.Curso.Remove(BuscarPorId(id));
            _contexto.SaveChanges();
        }

        public List<Curso> Listar()
        {
            return _contexto.Curso.ToList();
        }

        public void Salvar(Curso curso)
        {
            _contexto.Curso.Add(curso);
            _contexto.SaveChanges();
        }
    }
}


