import React, {useEffect, useState} from 'react';
import {useLocation, useHistory} from "react-router-dom";
import { History, LocationState } from "history";

import Promo from '../components/Promo/Promo';
import Services from '../components/Services/Services';
import About from '../components/About/About';
import Consultation from '../components/Consultation/Consultation';
import Principles from '../components/Principles/Principles';
import Reviews from '.././components/Reviews/Reviews';
import Modal from '../components/@Modal/Modal';

const Home: React.FC= () => {
    const [modal, setModal] = useState(false);

    let locHash = () => {
        const location = useLocation();

        useEffect(() => {
            document.location.hash = location.hash;
        }, [location])

        useEffect (() => {
            const clearHash = () => {
                document.location.hash = '/';
            }
            setTimeout(clearHash, 100);
        }, [location]);
    }

    locHash();

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