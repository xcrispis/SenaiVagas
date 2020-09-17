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
    public class PerfilComportamentalController : ControllerBase
    {
        PerfilComportamentalRepository _repositorio = new PerfilComportamentalRepository();

        [HttpGet]
        public  ActionResult<List<PerfilComportamental>> Get()
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
        public IActionResult Post(PerfilComportamental perfil)
        {
            try
            {
                 _repositorio.Salvar(perfil);
                return StatusCode(201);
            }
            catch (Exception error)
            {
                return BadRequest(error);
            }
            
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
