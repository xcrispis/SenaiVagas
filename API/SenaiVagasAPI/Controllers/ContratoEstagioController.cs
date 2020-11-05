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
    public class ContratoEstagioController : ControllerBase
    {
        private IContratoEstagioRepository _repository { get; set; }
        public ContratoEstagioController()
        {
            _repository = new ContratoEstagioRepository();
        }

        /// <summary>
        /// Lista todos os Contratos
        /// </summary>
        /// <returns>Uma lista de contratos</returns>
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
        /// Busca um contrato por seu id
        /// </summary>
        /// <param name="idContrato">Id que deve ser buscado</param>
        /// <returns>O contrato referente ao id informado</returns>
        [HttpGet("{idContrato}")]
        public IActionResult BuscarPorId(int idContrato)
        {
            try
            {
                return Ok(_repository.BuscarPorId(idContrato));
            }
            catch (Exception error)
            {
                return BadRequest(error);
            }
        }
        /// <summary>
        /// Adiciona um novo contrato
        /// </summary>
        /// <param name="novoContrato">Dados do novo contrato a ser adicionado</param>
        /// <returns>Status code 201</returns>
        [HttpPost]
        public IActionResult Adicionar(ContratoEstagio novoContrato)
        {
            try
            {
                _repository.Criar(novoContrato.DataTermino, novoContrato.FkCandidato, novoContrato.FkVaga);
                return StatusCode(201);
            }
            catch (Exception error)
            {
                return BadRequest(error);
            }
        }
        /// <summary>
        /// Atualiza um contrato já existente
        /// </summary>
        /// <param name="idContrato">Id do contrato a ser editado</param>
        /// <param name="novosDados">novos dados a serem substituidos</param>
        /// <returns>status code 204</returns>
        [HttpPut("{idContrato}")]
        public IActionResult Atualizar(int idContrato, ContratoEstagio novosDados)
        {
            try
            {
                _repository.Atualizar(idContrato, novosDados);
                return StatusCode(204);
            }
            catch (Exception error)
            {
                return BadRequest(error);
            }
        }
        /// <summary>
        /// Deleta um contrato
        /// </summary>
        /// <param name="idContrato">Id do contrato a ser deletado</param>
        /// <returns>status code 204</returns>
        [HttpDelete("{idContrato}")]
        public IActionResult Deletar(int idContrato)
        {
            try
            {
                _repository.Deletar(idContrato);
                return StatusCode(204);
            }
            catch (Exception error)
            {
                return BadRequest(error);
            }
        }
        
    }
}
