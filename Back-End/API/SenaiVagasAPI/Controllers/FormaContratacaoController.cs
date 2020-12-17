using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SenaiVagasAPI.Interfaces;
using SenaiVagasAPI.Repositories;

namespace SenaiVagasAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class FormasContratacoesController : ControllerBase
    {
        private IFormaContratacaoRepository _formaContratacao;

        public FormasContratacoesController()
        {
            _formaContratacao = new FormaContratacaoRepository();
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_formaContratacao.Listar());
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
    }
}
