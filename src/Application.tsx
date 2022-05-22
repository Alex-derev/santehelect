import React, {useEffect, useState} from 'react';
import {
	Switch,
	Route,
  } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import Heating from './pages/Heating';
import servicePagesService from "./services/ServicePagesService";
import Modal from './components/@Modal/Modal';
import Burger from "./components/Burger/Burger"


const Application: React.FC = () => {

    const [modal, setModal] = useState(false);
    const [burger, setBurger] = useState(false);

    useEffect(() => {
        servicePagesService.setServicePages();
    }, []);

    return (
        <>
            <Header setModal={setModal} setBurger={setBurger}/>
            <Switch>
                <Route path="/" children={<Home />} exact={true} />
                <Route path="/service/:key" children={<Heating />} exact={true} />
            </Switch>
            <Footer/>
            {modal && <Modal onClose={() => setModal(false)}/>}
            {burger && <Burger onClose={() => setBurger(false)} setModal={setModal}/>}
        </>
    );
}
export default Application;
