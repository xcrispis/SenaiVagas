using SenaiVagasAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiVagasAPI.Interfaces
{
    interface IDicaRepository
    {
        List<Dicas> Listar();


        Dicas BuscarPorId(int id);


        void Cadastrar(Dicas novaDica);


        void Atualizar(int id, Dicas dicaAtualizada);


        void Deletar(int id);
    }
}
