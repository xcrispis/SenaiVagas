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
        private ContextBd _repository = new ContextBd();

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
            _repository.Candidato.Update(AntigosDados);
            _repository.SaveChanges();
        }

        public Candidato BuscarPorId(int idCandidato)
        {
            return _repository.Candidato.FirstOrDefault(C => C.IdCandidato == idCandidato);
        }

        public void Criar(Candidato candidato)
        {
            _repository.Candidato.Add(candidato);
            _repository.SaveChanges();
        }

        public void Deletar(int idCandidato)
        {
            _repository.Candidato.Remove(BuscarPorId(idCandidato));
            _repository.SaveChanges();
        }

        public List<Candidato> Listar()
        {
            return _repository.Candidato.ToList();
        }
    }
}
