using SenaiVagasAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiVagasAPI.Interfaces
{
    public interface ICandidatoRepository
    {
        void Criar(Candidato candidato);
        void Atualizar(int idCandidato, Candidato NovosDados);
        void Deletar(int idCandidato);
        Candidato BuscarPorId(int idCandidato);
        List<Candidato> Listar();

    }
}
