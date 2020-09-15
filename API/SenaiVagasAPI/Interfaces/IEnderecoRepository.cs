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
    interface IEnderecoRepository
    {
        
        /// <summary>
        /// Listar endereços
        /// </summary>
        /// <returns></returns>
        List<Endereco> Listar();

        /// <summary>
        /// Cadastrar um novo endereço
        /// </summary>
        /// <param name="novoEndereco"></param>
        void Cadastrar(Endereco novoEndereco);

        /// <summary>
        /// Atualizar o endereço existente
        /// </summary>
        /// <param name="id"></param>
        /// <param name="enderecoAtualizado"></param>
        void Atualizar(int id, Endereco enderecoAtualizado);

        /// <summary>
        /// Deletar endereço
        /// </summary>
        /// <param name="id"></param>
        void Deletar(int id);

        /// <summary>
        /// Buscar endereço por ID
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Endereco BuscarPorId(int id);
    }
}
