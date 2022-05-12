import React from 'react';

import Button from '../@Button/Button';
import Svg from './public/icons/logo.svg';

import './scss/style.scss';

interface PropTypes{
    setModal: any
}

const Header: React.FC<PropTypes> = ({setModal}) => {
    const handleModalClick = () => {
        setModal((prevProps: boolean) => {
            return !prevProps
        })
    }
    return (
        <>
             <header className="header">
                <div className="container">
                    <img className="header_logo" src={Svg} alt="logo"/>                 
                    <div className="menu_right">
                        <nav>
                            <ul className="menu">
                                <li className="menu_item"><a href="#main">Главная</a></li>
                                <li className="menu_item"><a href="#about">О нас</a></li>
                                <li className="menu_item"><a href="#services">Услуги</a></li>
                                <li className="menu_item"><a href="#reviews">Отзывы</a></li>
                                <li className="menu_item"><a href="#footer">Контакты</a></li>
                            </ul>
                        </nav>
                        <Button classes={['button_nav']} onClick={() => handleModalClick()}>Обратный звонок</Button>
                    </div>
                </div>  
            </header>
        </>
    )
}

export default Header;

// react dispatch 
//react memo