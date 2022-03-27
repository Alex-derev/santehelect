import React from 'react';

import Promo from '../components/Promo/Promo';
import Services from '../components/Services/Services';
import About from '../components/About/About';
import Consultation from '../components/Consultation/Consultation';
import Principles from '../components/Principles/Principles';
import Reviews from '.././components/Reviews/Reviews';

const Home: React.FC = () => {

    return (
        <>
           <Promo/>
           <Services/>
           <About/>
           <Consultation/>
           <Principles/>
           <Reviews/>

        </>
    )
}

export default Home;