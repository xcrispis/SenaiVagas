import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import vagasGerais from './pages/vagasGeraisCandidato/index'

function Routers() {
    return (
        <BrowserRouter>
        <Route path="/vagas"  component={vagasGerais} />

        </BrowserRouter>
    )
}

export default Routers;
