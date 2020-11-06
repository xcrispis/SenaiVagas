using System;
using System.Collections.Generic;

namespace SenaiVagasAPI.Domains
{
    public partial class Dicas
    {
        public int IdDica { get; set; }
        public string Titulo { get; set; }
        public string Descricao { get; set; }
        public string Link { get; set; }
    }
}
