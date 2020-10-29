import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import vagasGerais from './pages/vagasGeraisCandidato/index';
import dicas from './pages/dicas/index';

function Routers() {
    return (
        <BrowserRouter>
        <Route path="/vagas"  component={vagasGerais} />
        <Route path="/dicas" component={dicas} />
        </BrowserRouter>
    )
}

export default Routers;
