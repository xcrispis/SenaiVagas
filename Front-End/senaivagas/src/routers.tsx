import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import vagasGerais from './pages/vagasGeraisCandidato/index'
<<<<<<< HEAD
import Perfil from './pages/perfil/index'
import minhasVagas from './pages/minhasVagas/index'
import verCandidatos from './pages/verCandidatos';
=======
>>>>>>> Develop

function Routers() {
    return (
        <BrowserRouter>
        <Route path="/vagas"  component={vagasGerais} />
<<<<<<< HEAD
        <Route path="/perfil"  component={Perfil} />
        <Route path="/minhasvagas"  component={minhasVagas} />
        <Route path="/vercandidatos"  component={verCandidatos} />
=======
>>>>>>> Develop

        </BrowserRouter>
    )
}

export default Routers;
