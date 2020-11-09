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

function Routers() {
    return (
        <BrowserRouter>
        	<Route path="/vagas"  component={vagasGerais} />
		<Route path="/"  exact component={Home}/>
		<Route path="/cadastro-empresa" component={CadastroEmpresa}/>
		<Route path="/dashboard" component={Dashboard}/>
		<Route path="/contrato" component={ViewContrato}/>
		<Route path="/vagas"  component={VagasGerais} />
        	<Route path="/perfil"  component={Perfil} />
        	<Route path="/minhasvagas"  component={MinhasVagas} />
        	<Route path="/vercandidatos"  component={VerCandidatos} />
        	<Route path="/verVaga"  component={VerVagaCandidato} />
        </BrowserRouter>
    )
}

export default Routers;
