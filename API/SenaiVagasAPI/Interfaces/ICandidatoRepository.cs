using SenaiVagasAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiVagasAPI.Interfaces
{
    public interface ICandidatoRepository
    {
        /// <summary>
        /// Adiciona um novo candidato
        /// </summary>
        /// <param name="candidato">Dados do candidato a ser adicionado</param>
        void Criar(Candidato candidato);
        /// <summary>
        /// Atualiza um candidato já existente
        /// </summary>
        /// <param name="idCandidato">id do candidato a ser alterado</param>
        /// <param name="NovosDados">Novos dados</param>
        void Atualizar(int idCandidato, Candidato NovosDados);
        /// <summary>
        /// Deleta um candidato
        /// </summary>
        /// <param name="idCandidato">id do candidato a ser deletado</param>
        void Deletar(int idCandidato);
        /// <summary>
        /// Busca um candidato por seu id
        /// </summary>
        /// <param name="idCandidato">Id do candidato a ser buscado</param>
        /// <returns>o candidato referente ao id informado</returns>
        Candidato BuscarPorId(int idCandidato);
        /// <summary>
        /// Lista todos os candidatos
        /// </summary>
        /// <returns>Uma lista de candidatos</returns>
        List<Candidato> Listar();

    }
}
