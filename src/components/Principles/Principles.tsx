import React from 'react';
import Section from '../@Section/Section';

import './scss/style.scss';

import backgroundPrinciples from './public/img/background.png';

const Principles: React.FC = () => {
    return (
        <Section
        id={''}
        classes={{
            classesSection: ['principles'],
            classesTitle: [''],
            classesWrapper: ['principles_wrapper'],
        }}
        principlesTitle ='Наши принципы'
        img = {backgroundPrinciples}
        >
            <>
                <div className="principles_left">
                    <div className="principles_text_wrapper">
                        <div className="principles_left__text principles_text">профессиональный подход к<br/> каждому проекту</div>
                    </div>
                    <div className="principles_line"></div>
                    <div className="principles_text_wrapper">
                        <div className="principles_left__text principles_text">высокие стандарты качества<br/> выполнения работ</div>
                    </div>
                    <div className="principles_line"></div>
                    <div className="principles_text_wrapper">
                        <div className="principles_left__text principles_text">ориентация на долгосрочные<br/> отношения с заказчиками и<br/> партнерами</div>
                    </div>
                    <div className="principles_line"></div>
                </div>
                <div className="principles_right">
                    <div className="principles_text_wrapper">
                        <div className="principles_right__text principles_text">индивидуальный подход к<br/> каждому проекту</div>
                    </div>
                    <div className="principles_line"></div>
                    <div className="principles_text_wrapper">
                        <div className="principles_right__text principles_text">открытость и честность в<br/> отношениях с заказчиками и<br/> партнерами</div>
                    </div>
                    <div className="principles_line"></div>
                    <div className="principles_text_wrapper">
                        <div className="principles_right__text principles_text">ответственность за результат</div>
                    </div>
                    <div className="principles_line"></div>
                </div>
                
            </>
        </Section>
    )
}

export default Principles;