using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SenaiVagasAPI.Domains;
using SenaiVagasAPI.Repositories;

namespace SenaiVagasAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class CursoController : ControllerBase
    {
        CursoRepository _repositorio = new CursoRepository();

        [HttpGet]
        public  IActionResult Get()
        {
            try
            {
                return Ok(_repositorio.Listar());
            }
            catch (Exception error)
            {
                return BadRequest(error);
            }     
        }

        [HttpPost]
        public  IActionResult Post(Curso curso)
        {
            try
            {
                 _repositorio.Salvar(curso);
                return StatusCode(201);
            }
            catch (Exception error)
            {
                return BadRequest(error);
            }
        }

        [HttpPatch("{id}")]
        public IActionResult Patch(int id, Curso curso)
        {
            try
            {
                _repositorio.Alterar(id, curso);
                return StatusCode(201);
            }
            catch (Exception error)
            {
                return BadRequest(error);
            }
        }

        [HttpDelete("{id}")]
        public  ActionResult<Curso> Delete(int id)
        {
            var curso =  _repositorio.BuscarPorId(id);
            if (curso == null)
            {
                return NotFound(new{mensagem = "Não foi possível deletar o curso pois o ID informado não existe!" });
            }
             _repositorio.Excluir(curso);

            return curso;
        }
    }
}
