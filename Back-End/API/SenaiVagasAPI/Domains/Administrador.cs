using System;
using System.Collections.Generic;

namespace SenaiVagasAPI.Domains
{
    public partial class Administrador
    {
        public int IdAdministrador { get; set; }
        public string Nome { get; set; }
        public string Cpf { get; set; }
        public int? FkUsuario { get; set; }

        public virtual Usuario FkUsuarioNavigation { get; set; }
    }
}
