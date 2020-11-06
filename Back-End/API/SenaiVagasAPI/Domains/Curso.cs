using System;
using System.Collections.Generic;

namespace SenaiVagasAPI.Domains
{
    public partial class Curso
    {
        public Curso()
        {
            Candidato = new HashSet<Candidato>();
        }

        public int? IdCursos { get; set; }
        public string Titulo { get; set; }

        public virtual ICollection<Candidato> Candidato { get; set; }
    }
}
