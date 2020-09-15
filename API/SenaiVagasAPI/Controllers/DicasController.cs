using Microsoft.AspNetCore.Mvc;
using SenaiVagasAPI.Domains;
using SenaiVagasAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiVagasAPI.Controllers
{


    [Produces("application/json")]

    [Route("api/[controller]")]


    [ApiController]
    public class DicasController : ControllerBase
    {
        private IDicasRepository _dicasRepository;
        public DicasController()
        {
            _dicasRepository = new DicasRepository();
        }

      
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_dicasRepository.Listar());
            }
            catch (Exception error)
            {
                return BadRequest(error);
            }
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            try
            {
                Dicas dicaBuscada = _dicasRepository.BuscarPorId(id);
                if (dicaBuscada != null)
                {
                    return Ok(dicaBuscada);
                }

                return NotFound("Nenhuma dica encontrada para o ID informado");
            }
            catch (Exception error)
            {
                return BadRequest(error);
            }
        }


        [HttpPost]
        public IActionResult Post(Dicas novaDica)
        {
            try
            {
                _dicasRepository.Cadastrar(novaDica);

                return StatusCode(201);
            }
            catch (Exception error)
            {
                return BadRequest(error);
            }
        }

        [HttpPatch("{id}")]
        public IActionResult Put(int id, Dicas dicaAtualizada)
        {
            try
            {
                Dicas dicaBuscada = _dicasRepository.BuscarPorId(id);

                if (dicaBuscada != null)
                {
                    _dicasRepository.Atualizar(id, dicaAtualizada);

                    return StatusCode(204);
                }
                return NotFound("Nenhuma dica encontrada para o ID informado");
            }
            catch (Exception error)
            {
                return BadRequest(error);
            }
        }


        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                Dicas dicaBuscada = _dicasRepository.BuscarPorId(id);

                if (dicaBuscada != null)
                {
                    _dicasRepository.Deletar(id);

                    return StatusCode(202);
                }

                return NotFound("Nenhuma dica encontrada para o ID informado");
            }
            catch (Exception error)
            {
                return BadRequest(error);
            }
        }
    }
}
