import React, {useEffect, useState} from 'react';
import {useLocation, useHistory} from "react-router-dom";

import Promo from '../components/Promo/Promo';
import Services from '../components/Services/Services';
import About from '../components/About/About';
import Consultation from '../components/Consultation/Consultation';
import Principles from '../components/Principles/Principles';
import Reviews from '.././components/Reviews/Reviews';
import Modal from '../components/@Modal/Modal';

const Home: React.FC = () => {
    const [modal, setModal] = useState(false);
    const[hash, setHash] = useState('#main');

    // const history = useHistory();
    // console.log(history);
    const location = useLocation();

    useEffect(() => {
        document.location.hash = location.hash;
        // document.location.hash = '#main';
    }, [location]);

    return (
        <>
            <Promo setModal={setModal}/>
            <Services/>
            <About/>
            <Consultation/>
            <Principles/>
            <Reviews/>
            {modal && <Modal onClose={() => setModal(false)}/>}
        </>
    )
}

export default Home;

//useLocation проверяю на хэш и скролю на него