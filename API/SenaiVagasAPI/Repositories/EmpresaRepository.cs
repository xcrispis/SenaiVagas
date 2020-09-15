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
            throw new NotImplementedException();
        }

        public Empresa BuscarPorId(int id)
        {
            throw new NotImplementedException();
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
