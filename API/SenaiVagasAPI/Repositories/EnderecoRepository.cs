using SenaiVagasAPI.Domains;
using SenaiVagasAPI.Contexts;
using SenaiVagasAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiVagasAPI.Repositories
{
    public class EnderecoRepository : IEnderecoRepository
    {
        ContextBd ctx = new ContextBd();

        //Atualiza um endereco existente
        public void Atualizar(int id, Endereco enderecoAtualizado)
        {
            // Busca o endereco através do id
            Endereco enderecoBuscado = ctx.Endereco.Find(id);

            // Atribui os novos valores ao campos existentes
            enderecoBuscado.IdEndereco = enderecoAtualizado.IdEndereco;
            enderecoBuscado.Cep = enderecoAtualizado.Cep;
            enderecoBuscado.Logradouro = enderecoAtualizado.Logradouro;
            enderecoBuscado.Complemento = enderecoAtualizado.Complemento;
            enderecoBuscado.Bairro = enderecoAtualizado.Bairro;
            enderecoBuscado.Uf = enderecoAtualizado.Uf;
            enderecoBuscado.Cidade = enderecoAtualizado.Cidade;
            enderecoBuscado.Numero = enderecoAtualizado.Numero;

            // Atualiza o endereco que foi buscado
            ctx.Endereco.Update(enderecoBuscado);

            // Salva as informações para serem gravadas no banco
            ctx.SaveChanges();
        }

        // Busca um endereco através do ID
        public Endereco BuscarPorId(int id)
        {
            // Retorna o primeiro endereco para o ID informado
            return ctx.Endereco.FirstOrDefault(u => u.IdEndereco == id);
        }

        //Cadastrar novo endereco
        public void Cadastrar(Endereco novoEndereco)
        {
            // Adiciona um novo endereco
            ctx.Endereco.Add(novoEndereco);

            // Salva as informações para serem gravas no banco
            ctx.SaveChanges();
        }

        //Deleta endereco
        public void Deletar(int id)
        {
            //Busca endereco através do id
            Endereco enderecoBuscado = ctx.Endereco.Find(id);

            //Remove o endereco que foi busacado
            ctx.Endereco.Remove(enderecoBuscado);

            //Salva as alterações
            ctx.SaveChangues();
        }

        //Lista com todos os usuários
        public List<Endereco> Listar()
        {
            //Retorna uma lista com todads as informações do usuário
            return ctx.Endereco.ToList();
        }
    }
}
