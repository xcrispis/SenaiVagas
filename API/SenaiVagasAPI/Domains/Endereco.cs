using System;
using System.Collections.Generic;

namespace SenaiVagasAPI.Domains
{
    public partial class Endereco
    {
        public Endereco()
        {
            Candidato = new HashSet<Candidato>();
            Empresa = new HashSet<Empresa>();
            Vaga = new HashSet<Vaga>();
        }

        public int IdEndereco { get; set; }
        public string Cep { get; set; }
        public string Logradouro { get; set; }
        public string Complemento { get; set; }
        public string Bairro { get; set; }
        public string Uf { get; set; }
        public string Cidade { get; set; }
        public int Numero { get; set; }

        public virtual ICollection<Candidato> Candidato { get; set; }
        public virtual ICollection<Empresa> Empresa { get; set; }
        public virtual ICollection<Vaga> Vaga { get; set; }
    }
}
