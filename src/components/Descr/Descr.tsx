import React from 'react';

import Section from '../@Section/Section';

import { serviceDataInterface } from '../../pages/Heating';

import './scss/style.scss';

interface PropTypes {
    serviceData: serviceDataInterface
}

const Descr: React.FC<PropTypes> = ({ serviceData }) => {
    return (
        <Section
            id ='descr'
            classes={{
                classesSection: ['descr'],
                classesTitle: [''],
                classesWrapper: ['descr_wrapper'],
            }}
        title={serviceData.h1}
        >
            <>
                <span>{serviceData.primaryText}</span>
                <div className="descr_text">{serviceData.secondaryText}</div>
            </>
        </Section>
    )
}

export default Descr;