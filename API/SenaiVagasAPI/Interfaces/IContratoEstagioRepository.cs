using SenaiVagasAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiVagasAPI.Interfaces
{
    public interface IContratoEstagioRepository
    {
        /// <summary>
        /// Cria um novo contrato
        /// </summary>
        /// <param name="DataTermino">Data de término do contrato</param>
        /// <param name="IdCandidato">id do candidato</param>
        /// <param name="IdVaga">id da vaga</param>
        void Criar(DateTime DataTermino, int IdCandidato, int IdVaga);
        /// <summary>
        /// Atualiza um contrato
        /// </summary>
        /// <param name="idContrato">id do contrato a ser atualizado</param>
        /// <param name="contrato">novos dados a serem implementados</param>
        void Atualizar(int idContrato,ContratoEstagio contrato);
        /// <summary>
        /// Deleta um contrato
        /// </summary>
        /// <param name="IdContrato">Id do contrato a ser deletado</param>
        void Deletar(int IdContrato);
        /// <summary>
        /// Lista todos os Contratos
        /// </summary>
        /// <returns>uma lista de contratos</returns>
        List<ContratoEstagio> Listar();
        /// <summary>
        /// Busca um contrato por id
        /// </summary>
        /// <param name="IdContrato">Id do contrato a ser buscado</param>
        /// <returns>o contrato referente ao id informado</returns>
        ContratoEstagio BuscarPorId(int IdContrato);
    }
}
