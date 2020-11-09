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

        void AtualizarStatus(int id, bool statusInscricao);

        Inscricao BuscarPorId(int id);

        List<Inscricao> BuscarPorVaga(int id);


        void Cadastrar(Inscricao novaInscricao);


        void Deletar(int id);
    }
}