import React from 'react';

import './scss/style.scss';

import Facebook from './public/icons/Facebook.svg';
import Instagram from './public/icons/Instagram.svg';


const Footer: React.FC = () => {
    return (
        <footer id="footer" className="footer">
            <div className="container">
                <div className="footer_social">
                    <h2 className="footer_social__title">santehelect</h2>
                    <div className="footer_social__wrapper">
                        <img src={Instagram} alt="" className="footer_social__instagram" />
                        <img src={Facebook} alt="" className="footer_social__facebook" />
                    </div>
                </div>
                <div className="footer_menu">
                    <div className="footer_menu__wrapper">
                        <div className="footer_menu__item footer_menu__title">Меню</div>
                        <a href="/" className="footer_menu__item">Наши услуги</a>
                        <a href="/" className="footer_menu__item">О нас</a>
                        <a href="/" className="footer_menu__item">Наши принципы</a>
                    </div>
                    <div className="footer_menu__wrapper">
                        <div className="footer_menu__item footer_menu__title">Клиентам</div>
                        <a href="/" className="footer_menu__item">Заказать консультацию</a>
                        <a href="/" className="footer_menu__item">Расчет сметы</a>
                        <a href="/" className="footer_menu__item">Акции</a>
                    </div>
                    <div className="footer_menu__wrapper">
                        <div className="footer_menu__item footer_menu__title">Документы</div>
                        <a href="/" className="footer_menu__item">Политика конфиденциальности</a>
                        <a href="/" className="footer_menu__item">Обработка персональных данных</a>
                        <a href="/" className="footer_menu__item">Публичная оферта</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;