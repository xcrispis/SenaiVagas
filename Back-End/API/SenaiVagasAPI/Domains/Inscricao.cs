using System;
using System.Collections.Generic;

namespace SenaiVagasAPI.Domains
{
    public partial class Inscricao
    {
        public int IdInscricao { get; set; }
        public bool? StatusIncricao { get; set; }
        public int? IdVaga { get; set; }
        public int? FkCandidato { get; set; }

        public virtual Candidato FkCandidatoNavigation { get; set; }
        public virtual Vaga IdVagaNavigation { get; set; }
    }
}
