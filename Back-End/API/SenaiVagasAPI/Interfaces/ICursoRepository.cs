using SenaiVagasAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiVagasAPI.Interfaces
{
    interface ICursoRepository
    {
        /// <summary>
        /// Lista os Cursos
        /// </summary>
        /// <returns>Lista de cursos</returns>
        public List<Curso> Listar();

        public Curso BuscarPorId(int id);

        public void Salvar(Curso curso);

        public void Alterar(int id, Curso curso);

        public void Excluir(int id);
    }
}
