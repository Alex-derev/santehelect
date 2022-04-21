import React, { Component } from 'react';
import Section from '../@Section/Section';
import './scss/style.scss';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import Left from './public/icons/left.svg';
import Right from './public/icons/right.svg';
import Button from '../@Button/Button';
import Image from '../@Image/Image';






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
                    <Slide index={0} className="slider_item"><Image hash={'0626344661ef59bed634147da436a447'}/></Slide>
                    <Slide index={1} className="slider_item"><Image hash={'09a73c20f1272a9062bc7556a7f01d5d'}/></Slide>
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