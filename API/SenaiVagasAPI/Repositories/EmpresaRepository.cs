using SenaiVagasAPI.Contexts;
using SenaiVagasAPI.Domains;
using SenaiVagasAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiVagasAPI.Repositories
{
    public class EmpresaRepository : IEmpresaRepository
    {

        ContextBd ctx = new ContextBd();
        public void Atualizar(int id, Empresa empresaAtualizada)
        {
            Empresa empresaBuscada = ctx.Empresa.Find(id);

            if (empresaBuscada != null)
                if (empresaBuscada.StatusEmpresa != null)
                    empresaBuscada.StatusEmpresa = empresaAtualizada.StatusEmpresa;
                if (empresaBuscada.RazaoSocial != null)
                    empresaBuscada.RazaoSocial = empresaAtualizada.RazaoSocial;
                if (empresaBuscada.Cnpj != null)
                    empresaBuscada.Cnpj = empresaAtualizada.Cnae;
                if (empresaBuscada.Telefone != null)
                    empresaBuscada.Telefone = empresaAtualizada.Telefone;
                if (empresaBuscada.Cnae != null)
                    empresaBuscada.Cnae = empresaAtualizada.Cnae;
                if (empresaBuscada.Apresentacao != null)
                    empresaBuscada.Apresentacao = empresaAtualizada.Apresentacao;
                if (empresaBuscada.NomeResponsavel != null)
                    empresaBuscada.CargoExercido = empresaAtualizada.CargoExercido;
                if (empresaBuscada.Logo != null)
                    empresaBuscada.Logo = empresaAtualizada.Logo;
                if (empresaBuscada.EmailContato != null)
                    empresaBuscada.EmailContato = empresaAtualizada.EmailContato;
                if (empresaBuscada.FkUsuario != null)
                    empresaBuscada.FkUsuario = empresaAtualizada.FkUsuario;
                if (empresaBuscada.FkEndereco != null)
                    empresaBuscada.FkEndereco = empresaAtualizada.FkEndereco;

                ctx.Empresa.Update(empresaBuscada);

                ctx.SaveChanges();
        }

        public Empresa BuscarPorId(int id)
        {
            return ctx.Empresa.FirstOrDefault(e => e.IdEmpresa == id);
        }

        public void Cadastrar(Empresa novaEmpresa)
        {
            throw new NotImplementedException();
        }

        public void Deletar(int id)
        {
            throw new NotImplementedException();
        }

        public List<Empresa> Listar()
        {
            throw new NotImplementedException();
        }
    }
}
