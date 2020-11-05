using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SenaiVagasAPI.Domains;
using SenaiVagasAPI.Interfaces;
using SenaiVagasAPI.Repositories;
using SenaiVagasAPI.ViewsModel;

namespace SenaiVagasAPI.Controllers
{
    /// <summary>
    /// Define que o tipo de resposta da API será no formato JSON
    /// </summary>
    [Produces("application/json")]

    //Define que a rota de uma aquisição será no formato domínio/api/NomeController
    [Route("api/[controller]")]

    //Define que é um controlador da API
    [ApiController]
    public class VagaController : ControllerBase
    {
        //Cria um obj _vagaRepository que irá receber todos os métodos definidos na interface
        private IVagaRepository _vagaRepository;

        //Instância este obj para que haja a referência aos métodos no repositorio
        public VagaController()
        {
            _vagaRepository = new VagaRepository();
        }

        [ProducesResponseType(StatusCodes.Status200OK)]
        //Lista de todas as vagas e retorna um status code 200
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                //Retorna a resposta sa aquisição fazendo a chamada para o método
                return Ok(_vagaRepository.Listar());
            }
            catch (Exception error)
            {
                return BadRequest(error);
            }
        }

        //Busca vaga através do ID e retorna um status code 200 - OK
        [ProducesResponseType(StatusCodes.Status200OK)]
        [HttpGet("id")]
        public IActionResult GetById(int id)
        {
            try
            {
                return Ok(_vagaRepository.BuscarPorId(id));
            }
            catch (Exception error)
            {
                return BadRequest(error);
            }
        }


        //Cadastrar uma nova vaga e retorna um status code  
        [ProducesResponseType(StatusCodes.Status201Created)]
        [HttpPost]
        public IActionResult Post( CadastroVagaViewModel novaVaga)
        {
            try
            {
                _vagaRepository.Cadastrar(novaVaga);
                return Ok("Nova vaga cadastrada");
            }
            catch (Exception error)
            {
                return BadRequest(error);
            }
        }

        //Atualiza endereço existente e retorna status code
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [HttpPut("{id}")]
        public IActionResult Put(int id, Vaga vagaAtualizada)
        {
            try
            {
                Vaga vagaBuscada = _vagaRepository.BuscarPorId(id);
                if (vagaBuscada == null)
                {
                    return NotFound
                        (
                        new
                        {
                            mensagem = "Vaga não encontrada",
                            erro = true
                        }
                        );
                }
                _vagaRepository.Atualizar(id, vagaAtualizada);
                return NoContent();
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        //Deleta uma vaga e retorna um status code
        [ProducesResponseType(StatusCodes.Status200OK)]
        [HttpDelete("{id}")]
        public IActionResult Deletar(int id)
        {
            try
            {
                _vagaRepository.Deletar(id);
                return Ok("Vaga Deletada");
            }
            catch (Exception error)
            {
                return BadRequest(error);
            }
        }
    }
}
