import React from 'react';
import Section from '../@Section/Section';
import './scss/style.scss';
import ArrowLeft from './public/icons/Arrow_left.svg';
import ArrowRight from './public/icons/Arrow_right.svg';
import Image from '../@Image/Image';

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
            <Image hash={'09a73c20f1272a9062bc7556a7f01d5d'}/>
            <img className="reviews_arrow__right" src={ArrowRight}></img>

        </>

    </Section>
  )
}

export default Reviews;