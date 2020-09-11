using SenaiVagasAPI.Contexts;
using SenaiVagasAPI.Domains;
using SenaiVagasAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiVagasAPI.Repositories
{
    public class ContratoEstagioRepository : IContratoEstagioRepository
    {
        private ContextBd _context = new ContextBd();

        public void Atualizar(int idContrato, ContratoEstagio contrato)
        {
            ContratoEstagio AntigoContrato = BuscarPorId(idContrato);
            if (contrato.Avaliacao1 != null)
                AntigoContrato.Avaliacao1 = contrato.Avaliacao1;
            if (contrato.Avaliacao2 != null)
                AntigoContrato.Avaliacao2 = contrato.Avaliacao2;
            if (contrato.Avaliacao3 != null)
                AntigoContrato.Avaliacao3 = contrato.Avaliacao3;
            if (contrato.Avaliacao4 != null)
                AntigoContrato.Avaliacao4 = contrato.Avaliacao4;
            if (contrato.DataTermino != null)
                AntigoContrato.DataTermino = contrato.DataTermino;
            if (contrato.MotivoEvasao != null)
                AntigoContrato.MotivoEvasao = contrato.MotivoEvasao;
            if (contrato.FkStatusEstagio != null)
                AntigoContrato.FkStatusEstagio = contrato.FkStatusEstagio;
            _context.ContratoEstagio.Update(AntigoContrato);
            _context.SaveChanges();
        }

        public ContratoEstagio BuscarPorId(int IdContrato)
        {
            return _context.ContratoEstagio.FirstOrDefault(c => c.IdContratoEstagio == IdContrato);
        }

        public void Criar(DateTime DataTermino, int IdCandidato, int IdVaga)
        {
            ContratoEstagio contrato = new ContratoEstagio(DataTermino,IdCandidato,IdVaga);
            _context.ContratoEstagio.Add(contrato);
            _context.SaveChanges();
        }

        public void Deletar(int IdContrato)
        {
            _context.ContratoEstagio.Remove(BuscarPorId(IdContrato));
            _context.SaveChanges();
        }

        public List<ContratoEstagio> Listar()
        {
            return _context.ContratoEstagio.ToList();
        }
    }
}
