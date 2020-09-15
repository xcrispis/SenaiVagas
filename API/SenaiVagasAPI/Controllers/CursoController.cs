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
    [Route("api/[controller]")]
    [ApiController]
    public class CursoController : ControllerBase
    {
        CursoRepository _repositorio = new CursoRepository();

        [HttpGet]
        public async Task<ActionResult<List<Curso>>> Get()
        {
            var curso = await _repositorio.Listar();
            return curso;
        }

        [HttpPost]
        public async Task<ActionResult<Curso>> Post(Curso curso)
        {
            try
            {
                await _repositorio.Salvar(curso);
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }
            return curso;
        }

        [HttpPatch("{id}")]
        public IActionResult Patch(int id, Curso curso)
        {
            try
            {
                _repositorio.Alterar(id, curso);
                return StatusCode(201);
            }
            catch (Exception Error)
            {
                return BadRequest(Error);
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
