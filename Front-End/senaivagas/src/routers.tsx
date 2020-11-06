import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import cadastroVaga from './pages/cadastroVaga/index';
import candidatoEmpresa from './pages/candidatoEmpresa/index';
import vagasGerais from './pages/vagasGeraisCandidato/index';

function Routers() {
    return (
        <BrowserRouter>
        <Route path="/vagas"  component={vagasGerais} />
        <Route path="/cadastrovaga" component={cadastroVaga} />
        <Route path="/candidatoemp" component={candidatoEmpresa} />
        </BrowserRouter>
    )
}

export default Routers;
