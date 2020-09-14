using SenaiVagasAPI.Domains;
using SenaiVagasAPI.Contexts;
using SenaiVagasAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiVagasAPI.Repositories
{
    public class VagaRepository : IVagaRepository
    {
        ContextBd ctx = new ContextBd();

        //Atualiza uma vaga existente
        public void Atualizar(int id, Vaga vagaAtualizada)
        {
            // Busca uma vaga através do id
            Vaga vagaBuscada = ctx.Vaga.Find(id);

            // Atribui os novos valores ao campos existentes
            vagaBuscada.IdVaga = vagaAtualizada.IdVaga;
            vagaBuscada.Descricao = vagaAtualizada.Descricao;
            vagaBuscada.Habilidades = vagaAtualizada.Habilidades;
            vagaBuscada.PlanoEstagio = vagaAtualizada.PlanoEstagio;
            vagaBuscada.FkEmpresa = vagaAtualizada.FkEmpresa;
            vagaBuscada.FkFormaContratacao = vagaAtualizada.FkFormaContratacao;
            vagaBuscada.FkEndereco = vagaAtualizada.FkEndereco;

            // Atualiza a vaga que foi buscado
            ctx.Vaga.update(vagaBuscada);

            // Salva as informações para serem gravadas no banco
            ctx.SaveChanges();
        }

        //Busca vaga através do ID
        public Vaga BuscarPorId(int id)
        {
            //Retorna a vaga para o ID informado
            return ctx.Vaga.FirstOrDefault(u => u.IdVaga == id);
        }

        //Cadastrar uma nova vaga
        public void Cadastrar(Vaga novaVaga)
        {
            //Adiciona uma nova vaga
            ctx.Vaga.Add(novaVaga);

            //Salva as informações
            ctx.SaveChanges();
        }

        //Deletar uma vaga
        public void Deletar(int id)
        {
            //Buscar uma vaga através do ID
            Vaga vagaBuscada = ctx.Vaga.Find(id);

            //Remove a vaga buscada
            ctx.Vaga.Remove(vagaBuscada);

            //Salva as alterações
            ctx.SaveChanges();
        }

        //Lista com as vagas
        public List<Vaga> Listar()
        {
            //Retorna uma lista com as vagas
            return ctx.Vaga.ToList();
        }
    }
}
