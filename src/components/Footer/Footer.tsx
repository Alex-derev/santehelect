import React from 'react';


import './scss/style.scss';

import Facebook from './public/icons/Facebook.svg';
import Instagram from './public/icons/Instagram.svg';
import {Link} from "react-router-dom";

interface PropTypes {
    setModal: any
}


const Footer: React.FC<PropTypes> = ({setModal}) => {
    const handleModalClick = () => {
        setModal((prevProps: boolean) => {
            return !prevProps
        })
    }

    return (
        <footer id="footer" className="footer">
            <div className="container">
                <div className="footer_contacts">
                    <h2 className="footer_contacts__title">santehelect</h2>
                    <div className="footer_contacts__wrapper">
                        <div className="footer_contacts__email footer_contacts__item">E-mail: santehelekt@yandex.by</div>
                        <div className="footer_contacts__number footer_contacts__item">+375 (29) 238-34-57</div>
                        <div className="footer_contacts__number footer_contacts__item">+375 (29) 576-64-43</div>
                    </div>
                </div>
                <div className="footer_menu">
                    <div className="footer_menu__wrapper">
                        <div className="footer_menu__title">Меню</div>
                        <Link
                            to={{
                                pathname: '/',
                                hash: '#services'
                            }}
                            className="footer_menu__item"
                        >
                            Наши услуги
                        </Link>

                        <Link
                            to={{
                                pathname: '/',
                                hash: '#about'
                            }}
                            className="footer_menu__item"
                        >
                            О нас
                        </Link>

                        <Link
                            to={{
                                pathname: '/',
                                hash: '#principles'
                            }}
                            className="footer_menu__item"
                        >
                            Наши принципы
                        </Link>
                    </div>
                    <div className="footer_menu__wrapper">
                        <div className=" footer_menu__title">Клиентам</div>
                        <a className="footer_menu__item" onClick={() => handleModalClick()}>Заказать консультацию</a>
                        <a className="footer_menu__item" onClick={() => handleModalClick()}>Расчет сметы</a>
                    </div>
                    <div className="footer_menu__wrapper">
                        <div className=" footer_menu__title">Документы</div>
                        <Link
                            to={{
                                pathname: '/',
                                hash: '#about'
                            }}
                            className="footer_menu__item"
                        >
                            Свидетельство о регистрации
                        </Link>
                        <a href="/" className="footer_menu__item">Публичная оферта</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;