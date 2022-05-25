import React, {useEffect} from 'react';
import {Link} from "react-router-dom";

import './scss/style.scss';

import cross from './media/icons/cross.svg';

import Button from '../@Button/Button';

interface PropTypes {
    onClose: any
    setModal: any
}

const Burger: React.FC<PropTypes> = ({onClose, setModal}) => {
    const handleModalClick = () => {
        setModal((prevProps: boolean) => {
            return !prevProps
        })
    }
    const handleCloseClick = () => {
        onClose((prevProps: boolean) => {
            return !prevProps
        })
    }

    useEffect(() => {
        document.body.style.overflowY = 'hidden';

        return () => {
            document.body.style.overflowY = 'scroll';
        }
    }, []);

    return (
        <section className='burger'>
            <div className="burger_bg" onClick={onClose}></div>
            <div className="burger_wrapper">
                <div className="burger_cross">
                    <img src={cross} alt='/' onClick={onClose}/>
                </div>
                <div className="burger_menu">
                    <Link
                        to={{
                            pathname: '/',
                            hash: '#main'
                        }}
                        className="burger_menu__item"
                        onClick={onClose}
                    >
                        Главная
                    </Link>
                    <Link
                        to={{
                            pathname: '/',
                            hash: '#about'
                        }}
                        className="burger_menu__item"
                        onClick={onClose}
                    >
                        О нас
                    </Link>
                    <Link
                        to={{
                            pathname: '/',
                            hash: '#services'
                        }}
                        className="burger_menu__item"
                        onClick={onClose}
                    >
                        Услуги
                    </Link>
                    <Link
                        to={{
                            pathname: '/',
                            hash: '#reviews'
                        }}
                        className="burger_menu__item"
                        onClick={onClose}
                    >
                        Отзывы
                    </Link>
                    <Link
                        to={{
                            pathname: '/',
                            hash: '#footer'
                        }}
                        className="burger_menu__item"
                        onClick={onClose}
                    >
                        Контакты
                    </Link>
                </div>
                <Button classes={['burger_button']} onClick={() => { handleCloseClick(); handleModalClick();}}>Оставить заявку</Button>
            </div>
        </section>
    )
}

export default Burger;