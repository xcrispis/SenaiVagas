using SenaiVagasAPI.Enuns;
using System;
using System.Collections.Generic;

namespace SenaiVagasAPI.Domains
{
    public partial class ContratoEstagio
    {
        public ContratoEstagio(DateTime dataTermino, int? fkCandidato, int? fkVaga)
        {
            DataInicio = DateTime.Now;
            DataTermino = dataTermino;
            FkStatusEstagio = (int?)EnumStatus.EmANDAMENTO;
            FkCandidato = fkCandidato;
            FkVaga = fkVaga;
        }

        public int IdContratoEstagio { get; set; }
        public DateTime DataInicio { get; set; }
        public DateTime DataTermino { get; set; }
        public string MotivoEvasao { get; set; }
        public byte[] Avaliacao1 { get; set; }
        public byte[] Avaliacao2 { get; set; }
        public byte[] Avaliacao3 { get; set; }
        public byte[] Avaliacao4 { get; set; }
        public int? FkStatusEstagio { get; set; }
        public int? FkCandidato { get; set; }
        public int? FkVaga { get; set; }

        public virtual Candidato FkCandidatoNavigation { get; set; }
        public virtual Situacao FkStatusEstagioNavigation { get; set; }
        public virtual Vaga FkVagaNavigation { get; set; }
    }
}
