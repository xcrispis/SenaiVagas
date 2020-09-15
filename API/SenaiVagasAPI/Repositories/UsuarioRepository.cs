using Microsoft.EntityFrameworkCore;
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
            ctx.Usuario.Remove(BuscarPorId(id));

            ctx.SaveChanges();
        }

        public List<Usuario> Listar()
        {
            return ctx.Usuario
                .Select(u => new Usuario()
                {
                    IdUsuario = u.IdUsuario,
                    Email = u.Email,
                    Senha = u.Senha,

                    FkTipoUsuarioNavigation = new TipoUsuario()
                    { 
                        IdTipoUsuario = u.FkTipoUsuarioNavigation.IdTipoUsuario,
                        Titulo = u.FkTipoUsuarioNavigation.Titulo
                    }
                })
                .ToList();
        }

        public Usuario Login(string email, string senha)
        {
            Usuario usuarioBuscado = ctx.Usuario
                .Include(u => u.FkTipoUsuarioNavigation)
                .FirstOrDefault(u => u.Email == email && u.Senha == senha);

            if (usuarioBuscado != null)
            {
                return usuarioBuscado;
            }

            return null;
        }
    }
}
