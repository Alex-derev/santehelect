import React from 'react';

import Button from '../@Button/Button';
import Svg from './public/icons/logo.svg';

import './scss/style.scss';

const Header: React.FC = () => {
    return (
        <>
             <header className="header">
                <div className="container">
                    <img className="header_logo" src={Svg} alt="logo"/>                 
                    <div className="menu_right">
                        <nav>
                            <ul className="menu">
                                <li className="menu_item">Главная</li>
                                <li className="menu_item">О нас</li>
                                <li className="menu_item">Услуги</li>
                                <li className="menu_item">Отзывы</li>
                                <li className="menu_item">Контакты</li>
                            </ul>
                        </nav>
                        <Button classes={['button_nav']} onClick={() => {}}>Обратный звонок</Button>
                    </div>
                </div>  
            </header>
        </>
    )
}

export default Header;