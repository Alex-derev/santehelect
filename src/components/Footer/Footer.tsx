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
                        <div className="footer_menu__item">Наши услуги</div>
                        <div className="footer_menu__item">О нас</div>
                        <div className="footer_menu__item">Наши принципы</div>
                    </div>
                    <div className="footer_menu__wrapper">
                        <div className="footer_menu__item footer_menu__title">Клиентам</div>
                        <div className="footer_menu__item">Заказать консультацию</div>
                        <div className="footer_menu__item">Расчет сметы</div>
                        <div className="footer_menu__item">Акции</div>
                    </div>
                    <div className="footer_menu__wrapper">
                        <div className="footer_menu__item footer_menu__title">Документы</div>
                        <div className="footer_menu__item">Политика конфиденциальности</div>
                        <div className="footer_menu__item">Обработка персональных данных</div>
                        <div className="footer_menu__item">Публичная оферта</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;