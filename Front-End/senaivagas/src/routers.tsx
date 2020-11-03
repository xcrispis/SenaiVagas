import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import vagasGerais from './pages/vagasGeraisCandidato/index';
import dicas from './pages/dicas/index';
import criardica from './pages/dicas/criardica';
import login from './pages/login/index'

function Routers() {
    return (
        <BrowserRouter>
        <Route path="/vagas"  component={vagasGerais} />
        <Route path="/dicas" component={dicas} />
        <Route path="/criardica" component={criardica} />
        <Route path="/login" component={login} />
        </BrowserRouter>
    )
}

export default Routers;
