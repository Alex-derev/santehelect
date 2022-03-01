import React from 'react';

import Header from './components/Header/Header';
import Home from './pages/Home';

const Application: React.FC = () => {

    return (
        <>
            <Header/>
            <Home/>
        </>
    );
}

export default Application;