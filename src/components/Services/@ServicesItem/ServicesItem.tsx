import React from 'react';
import { Link } from 'react-router-dom';

import servicesArrow from '../public/icons/services_arrow.svg';
import './scss/style.scss';

interface PropTypes {
    title: string
    imgSrc: string
    url: string
}

const ServicesItem: React.FC<PropTypes> = ({title, imgSrc, url}) => {
    return (
        <Link to={url} className="services_item">
            <img className="services_item__background" src={imgSrc}/>
            <div className="services_descr">
                <div className="services_descr__main">{title}</div>
                <div className="services_descr__arrow">
                    <span>Подробнее</span>
                    <img src={servicesArrow}/>
                </div>
            </div>
        </Link>
    )
}

export default ServicesItem