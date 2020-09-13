using SenaiVagasAPI.Contexts;
using SenaiVagasAPI.Domains;
using SenaiVagasAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiVagasAPI.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        ContextBd ctx = new ContextBd();
        public void Atualizar(int id, Usuario usuarioAtualizado)
        {
            Usuario usuarioBuscado = ctx.Usuario.Find(id);

            if (usuarioBuscado != null)
                if (usuarioBuscado.Email != null)
                    usuarioBuscado.Email = usuarioAtualizado.Email;
                if (usuarioBuscado.Senha != null)
                    usuarioBuscado.Senha = usuarioAtualizado.Senha;
                if (usuarioBuscado.FkTipoUsuario != null)
                    usuarioBuscado.FkTipoUsuario = usuarioAtualizado.FkTipoUsuario;

            ctx.Usuario.Update(usuarioBuscado);

            ctx.SaveChanges();
        }

        public Usuario BuscarPorId(int id)
        {
            return ctx.Usuario.FirstOrDefault(u => u.IdUsuario == id);
        }

        public void Cadastrar(Usuario novoUsuario)
        {
            ctx.Usuario.Add(novoUsuario);

            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            throw new NotImplementedException();
        }

        public List<Usuario> Listar()
        {
            throw new NotImplementedException();
        }
    }
}
