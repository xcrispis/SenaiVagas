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
    public class VagaRepository : IVagaRepository
    {
        ContextBd ctx = new ContextBd();

        /// <summary>
        /// Busca uma vaga através do ID, atribui os novos valores ao campos existentes, atualiza a vaga que foi buscado e salva as informações para serem gravadas no banco
        /// </summary>
        /// <param name="id"></param>
        /// <param name="vagaAtualizada"></param>
        public void Atualizar(int id, Vaga vagaAtualizada)
        {
            Vaga vagaBuscada = ctx.Vaga.Find(id);

            if (vagaAtualizada.IdVaga != null)
                vagaBuscada.IdVaga = vagaAtualizada.IdVaga;
            if(vagaAtualizada.Descricao != null)
            vagaBuscada.Descricao = vagaAtualizada.Descricao;
            if (vagaAtualizada.Habilidades != null)
                vagaBuscada.Habilidades = vagaAtualizada.Habilidades;
            if (vagaAtualizada.PlanoEstagio != null)
                vagaBuscada.PlanoEstagio = vagaAtualizada.PlanoEstagio;
            if (vagaAtualizada.FkEmpresa != null)
                vagaBuscada.FkEmpresa = vagaAtualizada.FkEmpresa;
            if (vagaAtualizada.FkFormaContratacao != null)
                vagaBuscada.FkFormaContratacao = vagaAtualizada.FkFormaContratacao;
            if (vagaAtualizada.FkEndereco != null)
                vagaBuscada.FkEndereco = vagaAtualizada.FkEndereco;

            ctx.Vaga.Update(vagaBuscada);
            ctx.SaveChanges();
        }


        /// <summary>
        /// Busca vaga através do ID
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public Vaga BuscarPorId(int id)
        {
            return ctx.Vaga.FirstOrDefault(u => u.IdVaga == id);
        }

        /// <summary>
        /// Cadastrar uma nova vaga e salva as informações
        /// </summary>
        /// <param name="novaVaga"></param>
        public void Cadastrar(Vaga novaVaga)
        {
            ctx.Vaga.Add(novaVaga);
            ctx.SaveChanges();
        }

        /// <summary>
        /// Busca uma vaga através do ID, remove a vaga buscada e salva as alterações
        /// </summary>
        /// <param name="id"></param>
        public void Deletar(int id)
        {
            Vaga vagaBuscada = ctx.Vaga.Find(id);

            ctx.Vaga.Remove(vagaBuscada);
            ctx.SaveChanges();
        }

        /// <summary>
        /// Lista com as vagas
        /// </summary>
        /// <returns></returns>
        public List<Vaga> Listar()
        {
            return ctx.Vaga.ToList();
        }
    }
}
