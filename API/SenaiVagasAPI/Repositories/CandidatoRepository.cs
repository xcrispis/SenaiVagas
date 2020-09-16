using Microsoft.EntityFrameworkCore;
using SenaiVagasAPI.Contexts;
using SenaiVagasAPI.Domains;
using SenaiVagasAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiVagasAPI.Repositories
{
    public class CandidatoRepository : ICandidatoRepository
    {
        private ContextBd _context = new ContextBd();

        public void Atualizar(int idCandidato, Candidato NovosDados)
        {
            Candidato AntigosDados = BuscarPorId(idCandidato);
            if (NovosDados.Nome != null)
                AntigosDados.Nome = NovosDados.Nome;
            if (NovosDados.Sobrenome != null)
                AntigosDados.Sobrenome = NovosDados.Sobrenome;
            if (NovosDados.Telefone != null)
                AntigosDados.Telefone = NovosDados.Telefone;
            if (NovosDados.LinkedIn != null)
                AntigosDados.LinkedIn = NovosDados.LinkedIn;
            if (NovosDados.GitHub != null)
                AntigosDados.GitHub = NovosDados.GitHub;
            if (NovosDados.Apresentacao != null)
                AntigosDados.Apresentacao = NovosDados.Apresentacao;
            if (NovosDados.Foto != null)
                AntigosDados.Foto = NovosDados.Foto;
            if (NovosDados.EmailContato != null)
                AntigosDados.EmailContato = NovosDados.EmailContato;
            if (NovosDados.FkCurso != null)
                AntigosDados.FkCurso = NovosDados.FkCurso;
            if (NovosDados.FkEndereco != null)
                AntigosDados.FkEndereco = NovosDados.FkEndereco;
            if (NovosDados.FkSituacao != null)
                AntigosDados.FkSituacao = NovosDados.FkSituacao;
            _context.Candidato.Update(AntigosDados);
            _context.SaveChanges();
        }

        public Candidato BuscarPorCpf(string cpf)
        {
            return _context.Candidato.FirstOrDefault(C => C.Cpf == cpf);
        }

        public Candidato BuscarPorId(int idCandidato)
        {
            return _context.Candidato.FirstOrDefault(C => C.IdCandidato == idCandidato);
        }

        public void Criar(Candidato candidato)
        {
            if(BuscarPorCpf(candidato.Cpf) == null)
            {
                _context.Candidato.Add(candidato);
                _context.SaveChanges();
            }
            
        }

        public void Deletar(int idCandidato)
        {
            _context.Candidato.Remove(BuscarPorId(idCandidato));
            _context.SaveChanges();
        }

        public List<Candidato> Listar()
        {
            return _context.Candidato.Include(c => c.FkCursoNavigation)
                                     .Include(c => c.FkEnderecoNavigation)
                                     .Include(c => c.FkPerfilComportamentalNavigation)
                                     .Include(c => c.FkSituacaoNavigation)
                                     .Select(u => new Candidato()
                                     {
                                         IdUsuarioNavigation = new Usuario
                                         {
                                             IdUsuario = u.IdUsuarioNavigation.IdUsuario,
                                             Email = u.IdUsuarioNavigation.Email,
                                             FkTipoUsuario = u.IdUsuarioNavigation.FkTipoUsuario

                                         }
                                     }).ToList();
        }
    }
}
