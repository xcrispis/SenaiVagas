using System;
using System.Collections.Generic;

namespace SenaiVagasAPI.Domains
{
    public partial class Candidato
    {
        public Candidato()
        {
            ContratoEstagio = new HashSet<ContratoEstagio>();
            Inscricao = new HashSet<Inscricao>();
        }

        public int IdCandidato { get; set; }
        public string Nome { get; set; }
        public string Sobrenome { get; set; }
        public string Telefone { get; set; }
        public string LinkedIn { get; set; }
        public string GitHub { get; set; }
        public string Apresentacao { get; set; }
        public string Cpf { get; set; }
        public byte[] Foto { get; set; }
        public string EmailContato { get; set; }
        public int? IdUsuario { get; set; }
        public int? FkCurso { get; set; }
        public int? FkPerfilComportamental { get; set; }
        public int? FkEndereco { get; set; } 
        public int? FkSituacao { get; set; }

        public virtual Curso FkCursoNavigation { get; set; }
        public virtual Endereco FkEnderecoNavigation { get; set; }
        public virtual PerfilComportamental FkPerfilComportamentalNavigation { get; set; }
        public virtual Situacao FkSituacaoNavigation { get; set; }
        public virtual Usuario IdUsuarioNavigation { get; set; }
        public virtual ICollection<ContratoEstagio> ContratoEstagio { get; set; }
        public virtual ICollection<Inscricao> Inscricao { get; set; }
    }
}
