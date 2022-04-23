import React from 'react';
import Section from '../@Section/Section';
import './scss/style.scss';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import Left from './public/icons/left.svg';
import Right from './public/icons/right.svg';
import Button from '../@Button/Button';
import Image from '../@Image/Image';

import {serviceDataInterface} from '../../pages/Heating';

interface PropTypes {
    serviceData: serviceDataInterface
}

const Sliders: React.FC<PropTypes> = ({ serviceData }) => {
    return (
        <Section
            classes={{
                classesSection: ['slider'],
                classesTitle: [''],
                classesWrapper: ['slider_wrapper'],
            }}
            title={serviceData.h2}
        >
            <>
                <CarouselProvider
                    naturalSlideWidth={400}
                    naturalSlideHeight={500}
                    totalSlides={6}
                    className="slider_item"
                >
                    <Slider>
                        {serviceData.images.map((hash, key)=> (<Slide key={hash} index={key} className="slider_item"><Image hash={hash} /></Slide>))}
                    </Slider>
                    <div className="slider_item__btn">
                        <ButtonBack className="slider_back"><img alt={''} src={Left}/></ButtonBack>
                        {Array(6).fill(0).map((val, key) => (<Dot key={key} slide={key} className="slider_item__dot"/>))}
                        <ButtonNext className="slider_next"><img alt={''} src={Right}/></ButtonNext>
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