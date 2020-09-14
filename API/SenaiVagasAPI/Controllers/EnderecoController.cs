using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SenaiVagasAPI.Domains;
using SenaiVagasAPI.Interfaces;
using SenaiVagasAPI.Repositories;


namespace SenaiVagasAPI.Controllers
{
    // Controller responsável pelos endpoints referentes aos endereços

    // Define que o tipo de resposta da API será no formato JSON
    [Produces("application/json")]

    // Define que a rota de uma requisição será no formato domínio/api/NomeController
    [Route("api/[controller]")]

    // Define que é um controlador de API
    [ApiController]
    public class EnderecoController : ControllerBase
    {
        //Cria um objeto _enderecoRepository que irá receber todos os métodos definidos na interface
        private IEnderecoRepository _enderecoRepository;

        //Instância este obj para que haja a referência aos métodos no repositorio
        public EnderecoController()
        {
            _enderecoRepository = new EnderecoRepository();
        }

        [ProducesResponseType(StatusCodes.Status200OK)]
        //Lista todos os endereço e retorna um status code 200 - OK
        [HttpGet]
        public IActionResult Get()
        {
            //Retorna a resposta da requisição fazendo a chamada para o método
            return Ok(_enderecoRepository.Listar());
        }

        //Busca endereço através do ID 
        //Lista o endereço pelo ID
        //Endereço buscado e um status code 200 - OK
        [ProducesResponseType(StatusCodes.Status200OK)]
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            return Ok(_enderecoRepository.BuscarPorId(id));
        }

        //Retornar o status code 201
        [ProducesResponseType(StatusCodes.Status201Created)]
        //Cadastrar um novo endereço  
        [HttpPost]
        public IActionResult Post(Endereco novoEndereco)
        {
            //Faz uma chamada para o método
            _enderecoRepository.Cadastrar(novoEndereco);

            //Retorna um status code 201
            return StatusCode(201);
        }

        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        //Atualiza endereço existente e retorna status code
        [HttpPut("{id}")]
        public IActionResult Put(int id, Endereco enderecoAtualizado)
        {
            Endereco enderecoBuscado = _enderecoRepository.BuscarPorId(id);

            if (enderecoBuscado == null)
            {
                return NotFound
                    (
                        new
                        {
                            mensagem = "Endereço não encontrado",
                            erro = true
                        }
                    );
            }
            try
            {
                _enderecoRepository.Atualizar(id, enderecoAtualizado);
                return NoContent();
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        [ProducesResponseType(StatusCodes.Status200OK)]
        //Deleta um endereço e retornar um status code 200
        [HttpDelete("{id}")]
        public IActionResult Deletar(int id)
        {
            //Faz uma chamada para o método
            _enderecoRepository.Deletar(id);

            //Retorna um status code 
            return Ok("Endereço excluido com sucesso");
        }
    }
}
