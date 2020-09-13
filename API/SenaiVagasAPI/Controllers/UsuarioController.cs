using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SenaiVagasAPI.Repositories;

namespace SenaiVagasAPI.Controllers
{
    [Produces("application/json")]

    [Route("api/[controller]")]

    [ApiController]
    public class UsuarioController : ControllerBase
    {
        //Criação do objetivo que receberá todos os métodos da interface
        private UsuarioRepository _usuarioRepository;

        //Instância do objeto para ter referencia de uso no Repository
        public UsuarioController()
        {
            _usuarioRepository = new UsuarioRepository();
        }

        [HttpGet]
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
    }
}
