using SenaiVagasAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiVagasAPI.Interfaces
{
    interface IVagaRepository
    {

        //Listar vagas
        List<Vaga> Listar();

        //Cadastrar uma nova vaga
        void Cadastrar(Vaga novaVaga);

        //Atualizar vaga existente
        void Atualizar(int id, Vaga vagaAtualizada);

        //Deletar vaga
        void Deletar(int id);

        //Buscar vaga por ID
        Vaga BuscarPorId(int id);
    }
}
