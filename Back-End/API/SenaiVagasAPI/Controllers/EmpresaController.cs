using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SenaiVagasAPI.Domains;
using SenaiVagasAPI.Interfaces;
using SenaiVagasAPI.Repositories;

namespace SenaiVagasAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class EmpresaController : ControllerBase
    {
        private IEmpresaRepository _empresaRepository;

        public EmpresaController()
        {
            _empresaRepository = new EmpresaRepository();
        }

        /// <summary>
        /// Busca todas as empresas
        /// </summary>
        /// <response code="200">Retorna uma lista de empresa</response> 
        /// <response code="400">Retorna o erro gerado</response> 
        /// domaim/api/Empresa
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        //[Authorize(Roles = "3")]
        public IActionResult Get()
        {
            try
            {
                return Ok(_empresaRepository.Listar());
            }
            catch (Exception error)
            {
                return BadRequest(error);
            }
        }

        /// <summary>
        /// Busca uma empresa pelo seu id
        /// </summary>
        /// <param name="id">Id da emrpesa a ser buscada</param>
        /// <response code="200">Retorna o empresa buscada</response>
        /// <response code="404">Retorna uma mensagem de erro</response>
        /// <response code="400">Retorna o erro gerado</response> 
        /// domain/api/Empresa/{id}
        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        //[Authorize(Roles = "3")]
        public IActionResult GetById(int id)
        {
            try
            {
                Empresa empresaBuscada = _empresaRepository.BuscarPorId(id);

                if (empresaBuscada != null)
                    return Ok(empresaBuscada);

                return NotFound($"A empresa {id} não foi encontrada");
            }
            catch (Exception error)
            {
                return BadRequest(error);
            }
        }

        /// <summary>
        /// Cadastra uma nova empresa
        /// </summary>
        /// <param name="novaEmpresa">Dados da empresa a ser cadastrada</param>
        /// <response code="201">Retorna o status code Created</response> 
        /// <response code = "400">Retorna o erro gerado</response> 
        /// domain/api/Empresa
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult Post (Empresa novaEmpresa)
        {
            try
            {
                _empresaRepository.Cadastrar(novaEmpresa);

                return StatusCode(201);
            }
            catch (Exception error)
            {
                return BadRequest(error);
            }
        }

        /// <summary>
        /// Atualiza uma empresa pelo seu id
        /// </summary>
        /// <param name="id">Id da empresa a ser atualizada</param>
        /// <param name="empresaAtualizada">Dados atualizados do usuário</param>
        /// <response code="204">Retorna o status code No Content</response>
        /// <response code="404">Retorna uma mensagem de erro</response>
        /// <response code="400">Retorna o erro gerado</response> 
        /// domain/api/Empresa/{id}
        [HttpPatch("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        //[Authorize(Roles = "3,2")]
        public IActionResult Patch(int id, Empresa empresaAtualizada)
        {
            try
            {
                Empresa empresaBuscada = _empresaRepository.BuscarPorId(id);

                if (empresaBuscada != null)
                {
                    _empresaRepository.Atualizar(id, empresaAtualizada);

                    return StatusCode(204);
                }

                return NotFound($"A empresa {id} não foi encontrada");
            }
            catch (Exception error)
            {
                return BadRequest(error);
            }
        }

        /// <summary>
        /// Deleta uma empresa pelo seu id
        /// </summary>
        /// <param name="id">Id da empresa a ser deletada</param>
        /// <response code="202">Retorna o status code Accepted</response>
        /// <response code="404">Retorna uma mensagem de erro</response> 
        /// <response code="400">Retorna o erro gerado</response> 
        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status202Accepted)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        //[Authorize(Roles = "3")]
        public IActionResult Delete(int id)
        {
            try
            {
                Empresa empresaBuscada = _empresaRepository.BuscarPorId(id);

                if (empresaBuscada != null)
                {
                    _empresaRepository.Deletar(id);

                    return StatusCode(202);
                }

                return NotFound($"A Empresa {id} não foi encontrada");
            }
            catch (Exception error)
            {
                return BadRequest(error);
            }
        }

    }
}
