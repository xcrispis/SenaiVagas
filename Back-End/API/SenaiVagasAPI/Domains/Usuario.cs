using System;
using System.Collections.Generic;

namespace SenaiVagasAPI.Domains
{
    public partial class Usuario
    {
        public Usuario()
        {
            Administrador = new HashSet<Administrador>();
            Candidato = new HashSet<Candidato>();
            Empresa = new HashSet<Empresa>();
        }

        public int IdUsuario { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public int? FkTipoUsuario { get; set; }

        public virtual TipoUsuario FkTipoUsuarioNavigation { get; set; }
        public virtual ICollection<Administrador> Administrador { get; set; }
        public virtual ICollection<Candidato> Candidato { get; set; }
        public virtual ICollection<Empresa> Empresa { get; set; }
    }
}
