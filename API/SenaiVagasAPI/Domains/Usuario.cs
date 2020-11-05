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

        public TipoUsuario FkTipoUsuarioNavigation { get; set; }
        public ICollection<Administrador> Administrador { get; set; }
        public ICollection<Candidato> Candidato { get; set; }
        public ICollection<Empresa> Empresa { get; set; }
    }
}
