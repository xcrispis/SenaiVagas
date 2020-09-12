using System;
using System.Collections.Generic;

namespace SenaiVagasAPI.Domains
{
    public partial class Vaga
    {
        public Vaga()
        {
            ContratoEstagio = new HashSet<ContratoEstagio>();
            Inscricao = new HashSet<Inscricao>();
        }

        public int IdVaga { get; set; }
        public string Descricao { get; set; }
        public string Habilidades { get; set; }
        public bool PlanoEstagio { get; set; }
        public int? FkEmpresa { get; set; }
        public int? FkFormaContratacao { get; set; }
        public int? FkEndereco { get; set; }

        public virtual Empresa FkEmpresaNavigation { get; set; }
        public virtual Endereco FkEnderecoNavigation { get; set; }
        public virtual FormaContratacao FkFormaContratacaoNavigation { get; set; }
        public virtual ICollection<ContratoEstagio> ContratoEstagio { get; set; }
        public virtual ICollection<Inscricao> Inscricao { get; set; }
    }
}
