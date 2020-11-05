using System;
using System.Collections.Generic;

namespace SenaiVagasAPI.Domains
{
    public partial class PerfilComportamental
    {
        public PerfilComportamental()
        {
            Candidato = new HashSet<Candidato>();
        }

        public int IdPerfilComportamental { get; set; }
        public decimal? Gato { get; set; }
        public decimal? Aguia { get; set; }
        public decimal? Tubarao { get; set; }
        public decimal? Lobo { get; set; }

        public virtual ICollection<Candidato> Candidato { get; set; }
    }
}
