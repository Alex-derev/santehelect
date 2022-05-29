import React from 'react'

import Section from '../@Section/Section';
import aboutImg from './public/img/about.png'

import './scss/style.scss';


const About: React.FC = () => {
    return (
        <Section
            id={'about'}
            classes={{
                classesSection: ['about'],
                classesTitle: [''],
                classesWrapper: ['about_wrapper'],
            }}
            title='О нас'
        >
            <>
                <div className="about_left">
                    <div className="about_descr__main">Мы продуктивно работаем в сфере строительного бизнеса, а также в области устройства современных инженерных систем, которые создают комфортные условия для жизни и работы людей.</div>
                    <div className="about_descr">Обладая необходимыми техническими возможностями и высококвалифицированным специалистам, мы гарантируем высокое качество и кратчайшее сроки выполнения работ любой сложности.<br/>
                        Мы постоянно развиваемся и расширяем область своей деятельности благодаря инновационному подходу к строительному бизнесу. В настоящее время мы занимаем уверенную позицию на рынке строительного бизнеса. К настоящему моменту нами сданы более 300 000 кв. метров площадей различного назначения</div>
                </div>
                <img  className='about_img' src={aboutImg} alt="картинка"/>
            </>
        </Section>

    )
}

export default About
