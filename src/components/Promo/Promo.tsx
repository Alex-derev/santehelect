import React from 'react';

import Button from '../@Button/Button';

import './scss/style.scss';

import backgroundHeader from './public/img/background-header.png';
import checkbox from './public/icons/checkbox.svg';

interface PropTypes {
    setModal: any
}

const Promo: React.FC<PropTypes> = ({setModal}) => {
    const handleModalClick = () => {
        setModal((prevProps: boolean) => {
            return !prevProps;
        })
    }

    return (
        <>
            <div id = "main" className="promo">
                <img className="promo_background" src={backgroundHeader} alt="" />
                <div className="container">
                    <h1 className="promo_header">
                        Электромонтажные и <br/>сантехнические работы в Минске
                    </h1>
                    <div className="checkbox">
                        <div className="checkbox_item">
                            <div className="checkbox_item__img">
                                <img src={checkbox} alt="checkbox"/>
                            </div>
                            <div className="checkbox_item__text">
                                Выезд, замер и смета бесплатно
                            </div>
                        </div>
                        <div className="checkbox_item">
                            <div className="checkbox_item__img">
                                <img src={checkbox} alt="checkbox"/>
                            </div>
                            <div className="checkbox_item__text">
                                Цены и сроки зафиксированы договором
                            </div>
                        </div>
                        <div className="checkbox_item">
                            <div className="checkbox_item__img">
                                <img src={checkbox} alt="checkbox"/>
                            </div>
                            <div className="checkbox_item__text">
                                Только квалифицированные специалисты
                            </div>
                        </div>
                    </div>
                    <div className="promo_button__wrapper">
                    <Button classes={['promo_button']} onClick={() => handleModalClick()}>Оставить заявку</Button>
                    <span></span>
                    </div>
                </div>
            </div>
         </>
    )
}

export default Promo;