import React from 'react';

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

    return (
       <section className='burger'>
           <div className="burger_wrapper">
               <div className="burger_cross">
                    <img src={cross} alt='/' onClick={onClose}/>
               </div>
                <div className="burger_menu">
                    <a className="burger_menu__item" href="#main" onClick={onClose}>Главная</a>
                    <a className="burger_menu__item" href="#about" onClick={onClose}>О нас</a>
                    <a className="burger_menu__item" href="#services" onClick={onClose}>Услуги</a>
                    <a className="burger_menu__item" href="#reviews" onClick={onClose}>Отзывы</a>
                    <a className="burger_menu__item" href="#footer" onClick={onClose}>Контакты</a>
                </div>
                <Button classes={['burger_button']} onClick={() => { handleCloseClick(); handleModalClick();}}>Оставить заявку</Button>
           </div>
       </section>
    )
}

export default Burger;