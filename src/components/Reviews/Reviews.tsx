import React, {useState} from 'react';

import Section from '../@Section/Section';

import './scss/style.scss';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot, Image, DotGroup} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import classNames           from 'classnames';

import ArrowLeft from './public/icons/left-reviews.svg';
import ArrowRight from './public/icons/right-reviews.svg';
import reviewOne from './public/img/review-one.png';

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
                <CarouselProvider
                    naturalSlideWidth={600}
                    naturalSlideHeight={760}
                    totalSlides={3}
                    className="reviews_slider"
                >
                    <Slider className="reviews_slider__item">
                        <Slide className="reviews_slide" index={0}>
                            <Image className="reviews_slide__img" hasMasterSpinner={true} src={reviewOne}/>
                        </Slide>
                        <Slide className="reviews_slide" index={1}>
                            <Image className="reviews_slide__img" hasMasterSpinner={true} src={reviewOne}/>
                        </Slide>
                        <Slide className="reviews_slide" index={2}>
                            <Image className="reviews_slide__img" hasMasterSpinner={true} src={reviewOne}/>
                        </Slide>
                    </Slider>
                        <div className="reviews_dot__wrapper">
                        <DotGroup renderDots={(props) => {}} showAsSelectedForCurrentSlideOnly={true}>
                            <Dot className="reviews_slide__dot" slide={0}/>
                            <Dot className="reviews_slide__dot" slide={1}/>
                            <Dot className="reviews_slide__dot" slide={2}/>
                        </DotGroup>
                        </div>
                </CarouselProvider>
            </>
        </Section>
    )
}

export default Reviews;