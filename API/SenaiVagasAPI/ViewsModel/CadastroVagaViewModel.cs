using SenaiVagasAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiVagasAPI.ViewsModel
{
    public class CadastroVagaViewModel
    {
        public string Titulo { get; set; }
        public string Email { get; set; }
        public string Descricao { get; set; }
        public string Habilidades { get; set; }
        public string Endereço { get; set; }
        public string AreaVaga { get; set; }
        public string NomeForma{ get; set; }

        public virtual FormaContratacao fk{ get; set; }

    }
}
