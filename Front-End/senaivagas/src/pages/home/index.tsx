import React from 'react';
import Header from '../../components/header/index';
import Footer from '../../components/footer/index';

import './style.css';
import '../../assets/style/global.css';

function Home() {
    return (
        <div>
            <Header/>

            <div className="row">
                <div className="quadrado"></div>
                <div className="quadrado"></div>
            </div>

            <Footer/>
        </div>
    );
}

export default Home;