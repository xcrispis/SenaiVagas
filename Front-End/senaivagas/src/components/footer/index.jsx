import React from 'react';
import './style.css';
import '../../assets/styles/global.css'


function Footer() {
    return (
        <div>
            <footer>
                <div className="footer-content">Edifício Sede FIESP <br/>
                    Av. Paulista, 1313, São Paulo/SP CEP 01311-923 <br/>
                </div>
                <div className="footer-content">
                    Central de atendimento: <br/>
                    (11) 3322-0050 (Capital, Grande São Paulo e Outros Estados) <br/>
                    0800-55-1000 (Interior de SP)
                </div>
            </footer>
        </div>
    )
}

export default Footer;