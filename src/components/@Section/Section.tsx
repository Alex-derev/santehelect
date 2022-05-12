import React from 'react';
import classNames from 'classnames';

import './scss/style.scss';

const classes = {
    classesSection: [''],
    classesTitle: [''],
    classesWrapper: ['']
}

interface PropTypes {
    children: React.ReactChild
    classes: typeof classes
    title?: string
    principlesTitle?: string
    id?: string
    img?: string
}

const Section: React.FC<PropTypes> = ({children, classes, title, id, img, principlesTitle}) => {
    return (
        <section id={(id)} className={classNames('section', ...classes.classesSection)}>
            <h2>{principlesTitle}</h2>
            <div className="container">
                <img src={img} />
                <h2 className={classNames('section_title', ...classes.classesTitle)}>{title}</h2>
                <div className={classNames('section_wrapper', ...classes.classesWrapper)}>
                    {children}
                </div>
            </div>
        </section>
    )
}

export default Section;