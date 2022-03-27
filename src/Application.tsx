import React from 'react';

import Header from './components/Header/Header';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';

const Application: React.FC = () => {

    return (
        <>
            <Header/>
            <Home/>
            <Footer/>
        </>
    );
}

export default Application;