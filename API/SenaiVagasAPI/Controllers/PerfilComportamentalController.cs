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

        [HttpPut("{id}")]
        public async Task<ActionResult> Put(int id, PerfilComportamental perfil)
        {
            if (id != perfil.IdPerfilComportamental)
            {
                return BadRequest();
            }
            try
            {

                await _repositorio.Alterar(perfil);
            }
            catch (DbUpdateConcurrencyException)
            {
                var perfil_valido = await _repositorio.BuscarPorId(id);

                if (perfil_valido == null)
                {
                    return NotFound(new { mensagem = "Nenhuma Oferta foi encontrada!" });
                }
                else
                {
                    throw;
                }
            }
            return NoContent();
        }

    }
}
