import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";

import Section from '../@Section/Section';
import ServicesItem from '../Services/@ServicesItem/ServicesItem';

import service_1 from './public/img/service_1.png';
import service_2 from './public/img/service_2.png';
import service_3 from './public/img/service_3.png';
import service_4 from './public/img/service_4.png';
import service_5 from './public/img/service_5.png';

import './scss/style.scss';

const servicesData = [
	{
		id: 0,
		title: 'Монтаж систем отопления',
		imgSrc: service_1,
		url: '/service_1'
	},
	{
		id: 1,
		title: 'Монтаж дренажных систем',
		imgSrc: service_2,
		url: '/service_2'
	},
	{
		id: 2,
		title: 'Монтаж систем водоснабжения ',
		imgSrc: service_3,
		url: 'service_3'
	},
	{
		id: 3,
		title: 'Монтаж систем канализации',
		imgSrc: service_4,
		url: 'service_4'
	},
	{
		id: 4,
		title: 'Электромонтажные работы',
		imgSrc: service_5,
		url: 'service_5'
	}
];


const Services: React.FC = () => {
 	return (
		<Section
			id={'services'}
			classes={{
				classesSection: ['services'],
				classesTitle: [''],
				classesWrapper: ['services_wrapper']
			}}
			title='Наши услуги'
			>
				<>
					{servicesData.map(item => <ServicesItem key={item.id} title={item.title} imgSrc={item.imgSrc} url={item.url} />)}

				</>   
		</Section>
	)
}

export default Services;