using SenaiVagasAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiVagasAPI.Interfaces
{
    interface IInscricaoRepository
    {
        List<Inscricao> Listar();


        Inscricao BuscarPorId(int id);


        void Cadastrar(Inscricao novaInscricao);


        void Deletar(int id);
    }
}
