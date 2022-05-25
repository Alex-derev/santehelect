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

// interface MyComponentProps {
//     someOfYourOwnProps: any;
//     history: History<LocationState>;
//     someMorePropsIfNeedIt: any;

const Home: React.FC= () => {
    const [modal, setModal] = useState(false);

    let locHash = () => {
        const location = useLocation();
        let history = useHistory();

        console.log(history);

        history.listen((location: any) => {
        document.location.hash = location.hash;
        })

        useEffect (() => {
            document.location.hash = '/';
        })
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

//useLocation проверяю на хэш и скролю на него