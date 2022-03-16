import React, {useState} from 'react';
import {useFormik} from 'formik';
import classNames from 'classnames';
import * as Yup from 'yup';
import InputMask from 'react-input-mask';

import Section from '../@Section/Section';

import './scss/style.scss';

const focusState = {
    name: false,
    phone: false,
    email: false,
}

const Consultation: React.FC = () => {
    const [focus, setFocus] = useState<typeof focusState>(focusState);

    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            email: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().min(2, 'Too Short!') .max(50, 'Too Long!').required('Required'),
            email: Yup.string().email('Invalid email').required('Required'),
            phone: Yup.string().test({
                name:  'phone',
                exclusive: false,
                message: 'Хрень',
                test: (value) => typeof value !== 'undefined' && new RegExp(`^375\\d{9}$`, 'g').test(value.replace(/\D+/g, '')),
                params: {}
            })
          })
    });

    const handleFocusBlur = (key: string, value: boolean = true): void => {
        setFocus(prevState => {
            return {
                ...prevState,
                [key]: value
            }
        });
    };

    // const handleFocusBlur2 = (key: string, value: boolean = true) => setFocus(prevState => {return {...prevState, [key]: value}});

    return (
        <Section
            classes={{
                classesSection: ['consultation'],
                classesTitle: [''],
                classesWrapper: ['consultation_wrapper']
            }}
            title='Закажите бесплатную консультацию'
        >

            <form id="consultation-form" className="consultation_form" onSubmit={formik.handleSubmit}>   
                <label  htmlFor="name" data-type="name" className={classNames(focus.name ? 'focus' : '')}>
                    <input
                        id="name" 
                        name="name" 
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        onFocus={() => handleFocusBlur('name')}
                        onBlur={e => handleFocusBlur('name', Boolean(e.target.value))}
                        required                    
                        />
                    <span>Ваше имя</span>
                </label>
                {formik.errors.phone && <p className={'error'}>{formik.errors.phone}</p>}
                <label htmlFor="phone" data-type="phone" className={classNames(focus.phone ? 'focus' : '', (formik.errors.phone && formik.errors.phone !== '') ? 'error' : '')}>
                <InputMask 
                    mask="+375 (99) 999-99-99" 
                    id="phone" 
                    name="phone" 
                    type="tel" 
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    onFocus={() => handleFocusBlur('phone')}
                    onBlur={(e: any) => handleFocusBlur('phone', Boolean(e.target.value))}
                    required 
                />
                    <span>Ваш телефон</span>
                </label>
                <label htmlFor="email" data-type="email" className={classNames(focus.email ? 'focus' : '')}>
                    <input 
                        id="email" 
                        name="email" 
                        type="email" 
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        onFocus={() => handleFocusBlur('email')}
                        onBlur={e => handleFocusBlur('email', Boolean(e.target.value))}
                        required
                    />
                     <span>Ваш e-mail</span>
                </label>
                <div className="consultation_form__button">
                    <button type="submit">Получить консультацию</button>
                    <span></span>
                </div>
                {/* <div style={{color: 'white'}}>{JSON.stringify(formik, null, 2)}</div> */}
            </form>

        </Section>
    )
}

export default Consultation;