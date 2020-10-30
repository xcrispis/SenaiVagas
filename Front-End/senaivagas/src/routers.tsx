import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import vagasGerais from './pages/vagasGeraisCandidato/index';
import dicas from './pages/dicas/index';
import criardica from './pages/dicas/criardica';

function Routers() {
    return (
        <BrowserRouter>
        <Route path="/vagas"  component={vagasGerais} />
        <Route path="/dicas" component={dicas} />
        <Route path="/criardica" component={criardica} />
        </BrowserRouter>
    )
}

export default Routers;
