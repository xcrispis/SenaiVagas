import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/gerais/home/index';
import CadastroEmpresa from './pages/gerais/cadastroEmpresa/index';
import Dashboard from './pages/admin/dashboard/index';
import ViewContrato from './pages/admin/viewContrato/index';
import VagasGerais from './pages/candidato/verTodasVagasDisponiveis/index'
import Perfil from './pages/candidato/perfilDoCandidato/index'
import MinhasVagas from './pages/candidato/verVagasQueMeInscrevi/index'
import VerCandidatos from './pages/empresa/verCandidatosInscritosNaVaga';
import VerVagaCandidato from './pages/candidato/verDetalhesDaVaga/index'
import dicas from './pages/candidato/dicas/index';
import criardica from './pages/candidato/dicas/criardica';
import login from './pages/gerais/login/index';
import CadastroAluno from './pages/gerais/cadastroAluno/index';
import cadastroVaga from './pages/empresa/cadastrarNovaVaga/index';
import PerfilEmpresa from './pages/empresa/perfilEmpresa/index'

function Routers() {
    return (
        <BrowserRouter>
			<Route path="/"  exact component={Home}/>
			<Route path="/cadastro-empresa" component={CadastroEmpresa}/>
			<Route path="/dashboard" component={Dashboard}/>
			<Route path="/contrato" component={ViewContrato}/>
			<Route path="/vagas" component={VagasGerais}/>
        	<Route path="/perfil"  component={Perfil} />
        	<Route path="/minhas-vagas"  component={MinhasVagas} />
        	<Route path="/ver-candidatos"  component={VerCandidatos} />
        	<Route path="/ver-vaga"  component={VerVagaCandidato} />
            <Route path="/dicas" component={dicas} />
            <Route path="/criardica" component={criardica} />
            <Route path="/login" component={login} />
            <Route path="/cadastro-aluno" component={CadastroAluno} />
            <Route path="/cadastro-vaga" component={cadastroVaga} />
            <Route path="/perfil-Empresa" component={PerfilEmpresa} />
        </BrowserRouter>
    )
}

export default Routers;
