import React, { Component } from 'react';
import Section from '../@Section/Section';
import './scss/style.scss';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import photo2 from './public/photo_2.jpg';
import photo3 from './public/photo_3.jpg';
import Left from './public/icons/left.svg';
import Right from './public/icons/right.svg';
import Button from '../@Button/Button';





const Sliders: React.FC = () => {
return (
    <Section
        classes={{
            classesSection: ['slider'],
            classesTitle: [''],
            classesWrapper: ['slider_wrapper'],
        }}
        title='Примеры наших работ'
    >
        <>
            <CarouselProvider
                naturalSlideWidth={400}
                naturalSlideHeight={500}
                totalSlides={2}
                className="slider_item"
            >
                <Slider>
                    <Slide index={0} className="slider_item"><Image src={photo2} hasMasterSpinner={true}/></Slide>
                    <Slide index={1} className="slider_item"><Image src={photo3} hasMasterSpinner={true}/></Slide>
                </Slider>
                <div className="slider_item__btn">
                    <ButtonBack className="slider_back"><img src={Left}/></ButtonBack>
                    <Dot slide={0} className="slider_item__dot"/>
                    <Dot slide={1} className="slider_item__dot"/>
                    <ButtonNext className="slider_next"><img src={Right}/></ButtonNext>
                </div>
            </CarouselProvider>
            <div className="slider_button__wrapper">
                <Button classes={['slider_button']} onClick={() => {}}>Оставить заявку</Button>
                <span></span>
            </div>
        </>

    </Section>
)
}

export default Sliders;