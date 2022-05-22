import React, {useState} from 'react';

import Promo from '../components/Promo/Promo';
import Services from '../components/Services/Services';
import About from '../components/About/About';
import Consultation from '../components/Consultation/Consultation';
import Principles from '../components/Principles/Principles';
import Reviews from '.././components/Reviews/Reviews';
import Modal from '../components/@Modal/Modal';

const Home: React.FC = () => {
    const [modal, setModal] = useState(false);

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