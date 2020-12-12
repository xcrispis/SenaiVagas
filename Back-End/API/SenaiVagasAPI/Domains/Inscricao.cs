using System;
using System.Collections.Generic;

namespace SenaiVagasAPI.Domains
{
    public partial class Inscricao
    {
        public int IdInscricao { get; set; }
        public bool StatusIncricao { get; set; }
        public int? IdVaga { get; set; }
        public int? Fkcandidato { get; set; }

        public virtual Candidato FkcandidatoNavigation { get; set; }
        public virtual Vaga IdVagaNavigation { get; set; }
    }
}