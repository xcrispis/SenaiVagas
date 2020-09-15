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

        [HttpGet]
        [Authorize(Roles = "Administrador")]
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

        [HttpGet("{id}")]
        [Authorize(Roles = "Administrador")]
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

        [HttpPost]
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

        [HttpPatch("{id}")]
        [Authorize(Roles = "Administrador,Empresa")]
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

        [HttpDelete("{id}")]
        [Authorize(Roles = "Administrador")]
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
