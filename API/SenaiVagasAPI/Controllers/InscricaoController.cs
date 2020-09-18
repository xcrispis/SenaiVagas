using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SenaiVagasAPI.Domains;
using SenaiVagasAPI.Interfaces;
using SenaiVagasAPI.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiVagasAPI.Controllers
{
    [Produces("application/json")]

    [Route("api/[controller]")]


    [ApiController]
    public class InscricaoController : ControllerBase
    {

        private IInscricaoRepository _inscricaoRepository;
        public InscricaoController()
        {
            _inscricaoRepository = new InscricaoRepository();
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_inscricaoRepository.Listar());
            }
            catch (Exception error)
            {
                return BadRequest(error);
            }
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            try
            {
                Inscricao inscricaoBuscada = _inscricaoRepository.BuscarPorId(id);
                if (inscricaoBuscada != null)
                {
                    return Ok(inscricaoBuscada);
                }

                return NotFound("Nenhuma inscrição encontrada para o ID informado");
            }
            catch (Exception error)
            {
                return BadRequest(error);
            }
         }

        [HttpPost]
        public IActionResult Post(Inscricao novaInscricao)
        {
            try
            {
                _inscricaoRepository.Cadastrar(novaInscricao);

                return StatusCode(201);
            }
            catch (Exception error)
            {
                return BadRequest(error);
            }
        }


        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                Inscricao inscricaoBuscada = _inscricaoRepository.BuscarPorId(id);

                if (inscricaoBuscada != null)
                {
                    _inscricaoRepository.Deletar(id);


                    return StatusCode(202);
                }

                return NotFound("Nenhuma inscrição encontrada para o ID informado");
            }
            catch (Exception error)
            {
                return BadRequest(error);
            }
        }
        /// <summary>
        /// Atualizar o status de uma inscrição
        /// </summary>
        /// <param name="id">Id da inscrição a ser atualizada</param>
        /// <param name="statusInscricao">novo status da inscrição</param>
        /// <response code="204">Atualizado com sucessoo</response> 
        /// <response code="400">Nenhuma inscrição encontrada para o ID informado</response> 
        /// <response code="400">Retorna alguma excessão gerada</response> 
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [HttpPatch("{id}")]
        public IActionResult AtualizarStatus(int id, bool statusInscricao)
        {
            try
            {
                Inscricao inscricaoBuscada = _inscricaoRepository.BuscarPorId(id);

                if (inscricaoBuscada != null)
                {
                    _inscricaoRepository.AtualizarStatus(id, statusInscricao);


                    return StatusCode(204);
                }

                return NotFound("Nenhuma inscrição encontrada para o ID informado");
            }
            catch (Exception error)
            {
                return BadRequest(error);
            }
        }


    }
}
