using SenaiVagasAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiVagasAPI.Interfaces
{
    interface ICurso
    {
       Task<List<Curso>> Listar();

       Curso BuscarPorId(int id);

       Task<Curso> Salvar(Curso curso);

       Curso Alterar(int id, Curso curso);

       Curso Excluir(Curso curso);
    }
}
