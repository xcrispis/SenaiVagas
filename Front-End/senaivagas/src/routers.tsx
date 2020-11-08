import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import vagasGerais from './pages/vagasGeraisCandidato/index'
import Perfil from './pages/perfil/index'
import MinhasVagas from './pages/minhasVagas/index'
import verCandidatos from './pages/verCandidatos';

function Routers() {
    return (
        <BrowserRouter>
        <Route path="/vagas"  component={vagasGerais} />
        <Route path="/perfil"  component={Perfil} />
        <Route path="/minhasvagas"  component={MinhasVagas} />
        <Route path="/vercandidatos"  component={verCandidatos} />

        </BrowserRouter>
    )
}

export default Routers;
