using System;
using System.Collections.Generic;
using System.Linq;
using System.Resources;
using System.Runtime.InteropServices.ComTypes;
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
    public class UsuarioController : ControllerBase
    {
        //Criação do objetivo que receberá todos os métodos da interface
        private IUsuarioRepository _usuarioRepository;

        //Instância do objeto para ter referencia de uso no Repository
        public UsuarioController()
        {
            _usuarioRepository = new UsuarioRepository();
        }

        /// <summary>
        /// Busca todos os usuários
        /// </summary>
        /// <response code="200">Retorna uma lista de usuário</response> 
        /// <response code="400">Retorna o erro gerado</response> 
        /// domaim/api/Usuario
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        //[Authorize(Roles = "3")]
        public IActionResult Get()
        {
            try
            {
                return Ok(_usuarioRepository.Listar());
            }
            catch (Exception error)
            {
                return BadRequest(error);
            }
        }
        /// <summary>
        /// Busca um usuário pelo seu id
        /// </summary>
        /// <param name="id">Id do usuário a ser buscado</param>
        /// <response code="200">Retorna o usuário buscado</response>
        /// <response code="404">Retorna uma mensagem de erro</response>
        /// <response code="400">Retorna o erro gerado</response> 
        /// domain/api/Usuario/{id}
        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        //[Authorize(Roles = "3")]
        public IActionResult GetById(int id)
        {
            try
            {
                Usuario usuarioBuscado = _usuarioRepository.BuscarPorId(id);

                if (usuarioBuscado != null)
                {
                    return Ok(usuarioBuscado);
                }

                return NotFound($"O usuário {id} não pode ser encontrado");
            }
            catch (Exception error)
            {
                return BadRequest(error);
            }
        }
        /// <summary>
        /// Cadastra um novo usuário
        /// </summary>
        /// <param name="novoUsuario">Dados do usuário a ser cadastrado</param>
        /// <response code="201">Retorna o status code Created</response> 
        /// <response code = "400">Retorna o erro gerado</response> 
        /// domain/api/Usuario
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult Post(Usuario novoUsuario)
        {
            try
            {
                _usuarioRepository.Cadastrar(novoUsuario);

                return StatusCode(201);
            }
            catch (Exception error)
            {
                return BadRequest(error);
            }
        }
        /// <summary>
        /// Atualiza um usuário pelo seu id
        /// </summary>
        /// <param name="id">Id do usuário a ser atualizado</param>
        /// <param name="usuarioAtualizado">Dados atualizados do usuário</param>
        /// <response code="204">Retorna o status code No Content</response>
        /// <response code="404">Retorna uma mensagem de erro</response>
        /// <response code="400">Retorna o erro gerado</response> 
        /// domain/api/Usuario/{id}
        [HttpPatch("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        //[Authorize(Roles = "3,1")]
        public IActionResult Patch(int id, Usuario usuarioAtualizado)
        {
            try
            {
                Usuario usuarioBuscado = _usuarioRepository.BuscarPorId(id);

                if (usuarioBuscado != null)
                {
                    _usuarioRepository.Atualizar(id, usuarioAtualizado);

                    return StatusCode(204);
                }

                return NotFound($"O usuário {id} não foi encontrado");
            }
            catch (Exception error)
            {
                return BadRequest(error);
            }
        }

        /// <summary>
        /// Deleta um usuário pelo seu id
        /// </summary>
        /// <param name="id">Id do usuário a ser deletado</param>
        /// <response code="202">Retorna o status code Accepted</response>
        /// <response code="404">Retorna uma mensagem de erro</response> 
        /// <response code="400">Retorna o erro gerado</response> 
        [HttpDelete("{id}")]
        //[Authorize(Roles = "3")]
        [ProducesResponseType(StatusCodes.Status202Accepted)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult Delete(int id)
        {
            try
            {
                Usuario usuarioBuscado = _usuarioRepository.BuscarPorId(id);

                if (usuarioBuscado != null)
                {
                    _usuarioRepository.Deletar(id);

                    return StatusCode(202);
                }

                return NotFound($"O usuário {id} não foi encontrado");
            }
            catch (Exception error)
            {
                return BadRequest(error);
            }
        }
    }
}
