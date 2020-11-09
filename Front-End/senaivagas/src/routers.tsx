import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import vagasGerais from './pages/vagasGeraisCandidato/index'
import Home from './pages/home/index';
import CadastroEmpresa from './pages/cadastroEmpresa/index';
import Dashboard from './pages/dashboard/index';
import ViewContrato from './pages/viewContrato/index';

function Routers() {
    return (
        <BrowserRouter>
        	<Route path="/vagas"  component={vagasGerais} />
		<Route path="/"  exact component={Home}/>
		<Route path="/cadastro-empresa" component={CadastroEmpresa}/>
		<Route path="/dashboard" component={Dashboard}/>
		<Route path="/contrato" component={ViewContrato}/>
        </BrowserRouter>
    )
}

export default Routers;
