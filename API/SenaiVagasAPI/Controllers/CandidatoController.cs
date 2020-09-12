using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SenaiVagasAPI.Domains;
using SenaiVagasAPI.Interfaces;
using SenaiVagasAPI.Repositories;

namespace SenaiVagasAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidatoController : ControllerBase
    {
        private ICandidatoRepository _repository { get; set; }
        public CandidatoController()
        {
            _repository = new CandidatoRepository();
        }
        /// <summary>
        /// Lista todos os candidatos
        /// </summary>
        /// <returns>Uma lista de candidatos</returns>
        [HttpGet]
        public IActionResult Listar()
        {
            try
            {
                return Ok(_repository.Listar());
            }
            catch (Exception error)
            {
                return BadRequest(error);
            }
        }
        /// <summary>
        /// Deleta um candidato
        /// </summary>
        /// <param name="idCandidato">id do candidato a ser deletado</param>
        /// <returns>StatusCode 204</returns>
        [HttpDelete("{idCandidato}")]
        public IActionResult Deletar(int idCandidato)
        {
            try
            {
                _repository.Deletar(idCandidato);
                return StatusCode(204);
            }
            catch (Exception error)
            {
                return BadRequest(error);
            }
        }
        /// <summary>
        /// Cadastra um novo candidato
        /// </summary>
        /// <param name="candidato">Dados do novo candidato</param>
        /// <returns>StatusCode 201</returns>
        [HttpPost]
        public IActionResult Criar(Candidato candidato)
        {
            try
            {
                if(_repository.BuscarPorCpf(candidato.Cpf) == null)
                {
                    _repository.Criar(candidato);
                    return StatusCode(201);
                }
                return BadRequest("Cpf Já cadastrado");
            }
            catch (Exception error)
            {
                return BadRequest(error);
            }
        }
    }
}
