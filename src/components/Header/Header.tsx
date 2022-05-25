import React  from 'react';
import {Link} from "react-router-dom";

import Button from '../@Button/Button';

import svg from './public/icons/logo.svg';

import './scss/style.scss';


interface PropTypes{
    setModal: any
    setBurger: any
    burger: boolean
    onClose: () => void
}

const Header: React.FC<PropTypes> = ({setModal, setBurger, burger, onClose}) => {
    const handleModalClick = () => {
        setModal((prevProps: boolean) => {
            return !prevProps
        })
    }

    const handleBurgerClick = () => {
        setBurger((prevProps: boolean) => {
            return !prevProps
        })
    }

    return (
        <>
             <header className="header" id="header">
                <div className="container">
                    <img className="header_logo" src={svg} alt="logo"/>
                    <div className="menu_right">
                        <nav>
                            <ul className="menu">
                                <li className="menu_item">
                                    <Link
                                        to={{
                                            pathname: '/',
                                            hash: '#main'
                                        }}
                                    >
                                        Главная
                                    </Link>
                                </li>
                                <li className="menu_item">
                                    <Link
                                        to={{
                                            pathname: '/',
                                            hash: '#about'
                                        }}
                                    >
                                        О нас
                                    </Link>
                                </li>
                                <li className="menu_item">
                                    <Link
                                        to={{
                                            pathname: '/',
                                            hash: '#services'
                                        }}
                                    >
                                        Услуги
                                    </Link>
                                </li>
                                <li className="menu_item">
                                    <Link
                                        to={{
                                            pathname: '/',
                                            hash: '#reviews'
                                        }}
                                    >
                                        Отзывы
                                    </Link>
                                </li>
                                <li className="menu_item">
                                    <Link
                                        to={{
                                            pathname: '/',
                                            hash: '#footer'
                                        }}
                                    >
                                        Контакты
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <Button classes={['button_nav']} onClick={() => handleModalClick()}>Обратный звонок</Button>
                        <div className='burg'  onClick={() => {handleBurgerClick(); onClose}}>
                            <div className="burg_item"></div>
                            <div className="burg_item"></div>
                            <div className="burg_item"></div>
                        </div>
                    </div>
                </div>  
            </header>
        </>
    )
}

export default Header;

// react dispatch 
//react memo