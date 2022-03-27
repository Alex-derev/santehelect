import React from 'react';
import Section from '../@Section/Section';
import './scss/style.scss';
import ArrowLeft from './public/icons/Arrow_left.svg';
import ArrowRight from './public/icons/Arrow_right.svg';

const Reviews: React.FC = () => {
  return (
    <Section
    id={'reviews'}
    classes={{
        classesSection: ['reviews'],
        classesTitle: [''],
        classesWrapper: ['reviews_wrapper']
    }}
    title='Отзывы о нас'
    >
        <>
            <img className="reviews_arrow__left" src={ArrowLeft}></img>
            <img className="reviews_img" src="/"></img>
            <img className="reviews_arrow__right" src={ArrowRight}></img>

        </>

    </Section>
  )
}

export default Reviews;