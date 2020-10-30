import React from 'react';
import './style.css';
import '../../assets/styles/global.css';
import Footer from '../../components/footer';
import ibmLogo from '../../assets/images/ibmlogo.png';

function minhasVagas() {
    return (
        <div>
            <main>
                <section className="container-geral">
                    <div className="alinha-linha">
                        <div className="container-individual">
                            <img src={ibmLogo} alt="" />
                            <div className="container-2">
                                <p className="cargo-text">Desenvolvedor(a) Front-End Junior.</p>
                                <p className="nome-empresa-text"> International Business Machines Corporation</p>
                            </div>

                            <div className="container-3">
                                <p className="local-title"><b>Status</b></p>
                                <p className="local-text">Em Andamento</p>
                            </div>
                        </div>
                        <div className="blue-div"></div>
                    </div>

                    <div className="alinha-linha">
                        <div className="container-individual">
                            <img src={ibmLogo} alt="" />
                            <div className="container-2">
                                <p className="cargo-text">Desenvolvedor(a) Front-End Junior.</p>
                                <p className="nome-empresa-text"> International Business Machines Corporation</p>
                            </div>

                            <div className="container-3">
                                <p className="local-title"><b>Status</b></p>
                                <p className="local-text">Em Andamento</p>
                            </div>
                        </div>
                        <div className="blue-div"></div>
                    </div>


                    <div className="alinha-linha">
                        <div className="container-individual">
                            <img src={ibmLogo} alt="" />
                            <div className="container-2">
                                <p className="cargo-text">Desenvolvedor(a) Front-End Junior.</p>
                                <p className="nome-empresa-text"> International Business Machines Corporation</p>
                            </div>

                            <div className="container-3">
                                <p className="local-title"><b>Status</b></p>
                                <p className="local-text">Em Andamento</p>
                            </div>
                        </div>
                        <div className="blue-div"></div>
                    </div>


                    <div className="alinha-linha">
                        <div className="container-individual">
                            <img src={ibmLogo} alt="" />
                            <div className="container-2">
                                <p className="cargo-text">Desenvolvedor(a) Front-End Junior.</p>
                                <p className="nome-empresa-text"> CONGO TEAM</p>
                            </div>

                            <div className="container-3">
                                <p className="local-title"><b>Status</b></p>
                                <p className="local-text">Em Andamento</p>
                            </div>
                        </div>
                        <div className="blue-div"></div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default minhasVagas;