using System;
using System.Collections.Generic;

namespace SenaiVagasAPI.Domains
{
    public partial class FormaContratacao
    {
        public FormaContratacao()
        {
            Vaga = new HashSet<Vaga>();
        }

        public int IdFormaContratacao { get; set; }
        public string Forma { get; set; }

        public virtual ICollection<Vaga> Vaga { get; set; }
    }
}
