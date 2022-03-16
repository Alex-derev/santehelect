import React from 'react';
import Section from '../@Section/Section';
import './scss/style.scss';

const Principles: React.FC = () => {
  return (
    <Section
    classes={{
        classesSection: ['principles'],
        classesTitle: [''],
        classesWrapper: ['principles_wrapper'],
    }}
    title='Наши принципы'
    >
        <>
            <div className="principles_left">
                <div className="principles_left__text">
                    профессиональный подход к<br/> каждому проекту
                </div>
                <div className="principles_line"></div>
                <div className="principles_left__text">
                    высокие стандарты качества<br/> выполнения работ
                </div>
                <div className="principles_line"></div>
                <div className="principles_left__text">
                    ориентация на долгосрочные<br/> отношения с заказчиками и<br/> партнерами
                </div>
                <div className="principles_line"></div>
            </div>
            <div className="principles_right">
                <div className="principles_right__text">
                    индивидуальный подход к<br/> каждому проекту
                </div>
                <div className="principles_line"></div>
                <div className="principles_right__text">
                    открытость и честность в<br/> отношениях с заказчиками и<br/> партнерами
                </div>
                <div className="principles_line"></div>
                <div className="principles_right__text">
                    ответственность за результат
                </div>
                <div className="principles_line"></div>
            </div>
        </>


    </Section>
  )
}

export default Principles;