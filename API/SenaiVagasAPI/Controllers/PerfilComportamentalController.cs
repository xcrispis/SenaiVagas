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
    public class PerfilComportamentalController : ControllerBase
    {
        PerfilComportamentalRepository _repositorio = new PerfilComportamentalRepository();

        [HttpGet]
        public async Task<ActionResult<List<PerfilComportamental>>> Get()
        {
            var perfil = await _repositorio.Listar();
            return perfil;
        }

        [HttpPost]
        public async Task<ActionResult<PerfilComportamental>> Post(PerfilComportamental perfil)
        {
            try
            {
                await _repositorio.Salvar(perfil);
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }
            return perfil;
        }

        [HttpPatch("{id}")]
        public  IActionResult Patch(int id, PerfilComportamental perfil)
        {         
            try
            {
                 _repositorio.Alterar(id, perfil);
                return StatusCode(201);
            }
            catch (Exception Error)
            {
                return BadRequest(Error);             
            }
            
        }

    }
}
