import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
<<<<<<< HEAD
import vagasGerais from './pages/vagasGeraisCandidato';
import cadastroVaga from './pages/cadastroVaga/index';
import candidatoEmpresa from './pages/candidatoEmpresa/index';
=======
import vagasGerais from './pages/vagasGeraisCandidato/index'
>>>>>>> origin/Develop

function Routers() {
    return (
        <BrowserRouter>
        <Route path="/vagas"  component={vagasGerais} />
<<<<<<< HEAD
        <Route path="/cadastrovaga" component={cadastroVaga} />
        <Route path="/candidatoemp" component={candidatoEmpresa} />
=======

>>>>>>> origin/Develop
        </BrowserRouter>
    )
}

export default Routers;
