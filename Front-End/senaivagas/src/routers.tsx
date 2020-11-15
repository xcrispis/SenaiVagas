import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import vagasGerais from './pages/vagasGeraisCandidato/index'
import Home from './pages/home/index';
import CadastroEmpresa from './pages/cadastroEmpresa/index';
import Dashboard from './pages/dashboard/index';
import ViewContrato from './pages/viewContrato/index';
import VagasGerais from './pages/vagasGeraisCandidato/index'
import Perfil from './pages/perfil/index'
import MinhasVagas from './pages/minhasVagas/index'
import VerCandidatos from './pages/verCandidatos';
import VerVagaCandidato from './pages/verVagaCandidato/index'
import dicas from './pages/dicas/index';
import criardica from './pages/dicas/criardica';
import login from './pages/login/index';
import CadastroAluno from './pages/cadastroAluno/index';
import cadastroVaga from './pages/cadastroVaga/index';

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
        </BrowserRouter>
    )
}

export default Routers;
