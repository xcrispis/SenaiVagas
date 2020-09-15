using SenaiVagasAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiVagasAPI.Interfaces
{
    /// <summary>
    /// Interface responsável pelo UsuarioRepository
    /// </summary>
    interface IVagaRepository
    {

        /// <summary>
        /// Listar vagas
        /// </summary>
        /// <returns></returns>
        List<Vaga> Listar();

        /// <summary>
        /// Cadastrar uma nova vaga
        /// </summary>
        /// <param name="novaVaga"></param>
        void Cadastrar(Vaga novaVaga);

        /// <summary>
        /// Atualizar vaga existente
        /// </summary>
        /// <param name="id"></param>
        /// <param name="vagaAtualizada"></param>
        void Atualizar(int id, Vaga vagaAtualizada);

        /// <summary>
        /// Deletar vaga
        /// </summary>
        /// <param name="id"></param>
        void Deletar(int id);

        /// <summary>
        /// Buscar vaga por ID
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Vaga BuscarPorId(int id);
    }
}
