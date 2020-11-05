using System;
using System.Collections.Generic;

namespace SenaiVagasAPI.Domains
{
    public partial class Empresa
    {
        public Empresa()
        {
            Vaga = new HashSet<Vaga>();
        }

        public int IdEmpresa { get; set; }
        public bool? StatusEmpresa { get; set; }
        public string RazaoSocial { get; set; }
        public string Cnpj { get; set; }
        public string Telefone { get; set; }
        public string Cnae { get; set; }
        public string Apresentacao { get; set; }
        public string NomeResponsavel { get; set; }
        public string CargoExercido { get; set; }
        public byte[] Logo { get; set; }
        public string EmailContato { get; set; }
        public int? FkUsuario { get; set; }
        public int? FkEndereco { get; set; }

        public virtual Endereco FkEnderecoNavigation { get; set; }
        public virtual Usuario FkUsuarioNavigation { get; set; }
        public virtual ICollection<Vaga> Vaga { get; set; }
    }
}
