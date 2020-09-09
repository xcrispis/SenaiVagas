using System;
using System.Collections.Generic;

namespace SenaiVagasAPI.Domains
{
    public partial class Situacao
    {
        public Situacao()
        {
            Candidato = new HashSet<Candidato>();
        }

        public int IdSituacao { get; set; }
        public string Titulo { get; set; }

        public virtual ICollection<Candidato> Candidato { get; set; }
    }
}
