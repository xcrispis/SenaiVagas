using SenaiVagasAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiVagasAPI.Interfaces
{
    interface IEmpresaRepository
    {
        /// <summary>
        /// Lista todas as empresas
        /// </summary>
        /// <returns>Um lista de empresa</returns>
        List<Empresa> Listar();
        /// <summary>
        /// Lista uma empresa pelo seu id
        /// </summary>
        /// <param name="id">Id da empresa a ser buscada</param>
        /// <returns>A empresa com o id informado</returns>
        Empresa BuscarPorId(int id);
        /// <summary>
        /// Cadastra uma nova empresa
        /// </summary>
        /// <param name="novaEmpresa">Dados da empresa a ser cadastrada</param>
        void Cadastrar(Empresa novaEmpresa);
        /// <summary>
        /// Atualiza uma empresa
        /// </summary>
        /// <param name="id">Id da empresa a ser cadastrada</param>
        /// <param name="empresaAtualizada">Dados atualizados da empresa</param>
        void Atualizar(int id, Empresa empresaAtualizada);
        /// <summary>
        /// Deleta uma empresa pelo seu Id
        /// </summary>
        /// <param name="id">Id da empresa a ser deletada</param>
        void Deletar(int id);
    }
}
