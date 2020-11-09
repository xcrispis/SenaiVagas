using SenaiVagasAPI.Domains;
using SenaiVagasAPI.Contexts;
using SenaiVagasAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace SenaiVagasAPI.Repositories
{
    public class EnderecoRepository : IEnderecoRepository
    {
        ContextBd ctx = new ContextBd();

        /// <summary>
        /// Busca o endereco através do ID atribui novos valores ao campos existentes atualiza o endereco que foi buscado e salva as informações para serem gravadas no banco
        /// </summary>
        /// <param name="id"></param>
        /// <param name="enderecoAtualizado"></param>
        public void Atualizar(int id, Endereco enderecoAtualizado)
        {
   
            Endereco enderecoBuscado = ctx.Endereco.Find(id);

            if (enderecoAtualizado.IdEndereco != null)
                enderecoBuscado.IdEndereco = enderecoAtualizado.IdEndereco;
            if (enderecoAtualizado.Cep != null)
                enderecoBuscado.Cep = enderecoAtualizado.Cep;
            if (enderecoAtualizado.Logradouro != null)
                enderecoBuscado.Logradouro = enderecoAtualizado.Logradouro;
            if (enderecoAtualizado.Complemento != null)
                enderecoBuscado.Complemento = enderecoAtualizado.Complemento;
            if (enderecoAtualizado.Bairro != null)
                enderecoBuscado.Bairro = enderecoAtualizado.Bairro;
            if (enderecoAtualizado.Uf != null)
                enderecoBuscado.Uf = enderecoAtualizado.Uf;
            if (enderecoAtualizado.Cidade != null)
                enderecoBuscado.Cidade = enderecoAtualizado.Cidade;
            if (enderecoAtualizado.Numero != null)
                enderecoBuscado.Numero = enderecoAtualizado.Numero;

            ctx.Endereco.Update(enderecoBuscado);
            ctx.SaveChanges();
        }

        public int buscarPorCep(string cep, int numero)
        {
            Endereco endereco = ctx.Endereco.FirstOrDefault(e => e.Cep == cep && e.Numero == numero);

            return endereco.IdEndereco;
        }

        /// <summary>
        /// Busca um endereco através do ID
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public Endereco BuscarPorId(int id)
        {
            return ctx.Endereco.FirstOrDefault(u => u.IdEndereco == id);
        }

        
        /// <summary>
        /// Cadastrar novo endereco e salva as informações para serem gravas no banco
        /// </summary>
        /// <param name="novoEndereco"></param>
        public void Cadastrar(Endereco novoEndereco)
        {
            ctx.Endereco.Add(novoEndereco);
            ctx.SaveChanges();
        }


        /// <summary>
        /// Busca endereco através do id, remove o endereco que foi busacado e salva as alterações
        /// </summary>
        /// <param name="id"></param>
        public void Deletar(int id)
        {
            Endereco enderecoBuscado = ctx.Endereco.Find(id);

            ctx.Endereco.Remove(enderecoBuscado);

            ctx.SaveChanges();
        }

        /// <summary>
        /// Lista com todos os usuários
        /// </summary>
        /// <returns></returns>
        public List<Endereco> Listar()
        {
            return ctx.Endereco.ToList();
        }
    }
}
