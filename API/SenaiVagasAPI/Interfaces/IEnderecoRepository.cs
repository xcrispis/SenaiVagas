using SenaiVagasAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiVagasAPI.Interfaces
{
    // Interface responsável pelo UsuarioRepository
    interface IEnderecoRepository
    {
        //Listar endereços
        List<Endereco> Listar();

        //Cadastrar um novo endereço
        void Cadastrar(Endereco novoEndereco);

        //Atualizar o endereço existente
        void Atualizar(int id, Endereco enderecoAtualizado);

        //Deletar endereço
        void Deletar(int id);

        //Buscar endereço por ID
        Endereco BuscarPorId(int id);
    }
}
