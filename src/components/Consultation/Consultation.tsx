import React, {useState} from 'react';
import {useFormik, Field, Formik, Form, ErrorMessage} from 'formik';
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

// const validateEmail = (value: any) => {

//     let errorMessage;

//  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
 
//       errorMessage = 'Неверный email';
 
//     }
 
//     return errorMessage;
 
//   };

//   const validateName = (value: any) => {
//     let errorMessage;
//  if(value.length < 2 || value.length > 30) {
//         errorMessage = 'Слишком короткое имя'
//     }
//     return errorMessage
//   };

//   const validatePhone = (value: any) => {
//       let errorMessage;
//       if(!`^375\\d{9}$`.includes(value)) {
//         errorMessage = 'Неверный формат телефона'
//       }
//       return errorMessage
//   };

// const SignupSchema = Yup.object().shape({
//     firstName: Yup.string()
//       .min(2, 'Too Short!')
//       .max(50, 'Too Long!')
//       .required('Required'),
//     lastName: Yup.string()
//       .min(2, 'Too Short!')
//       .max(50, 'Too Long!')
//       .required('Required'),
//     email: Yup.string().email('Invalid email').required('Required'),
//   });

const Consultation: React.FC = () => {
    // const blurHandler = (e: any) => {
    //     switch (e.target.name) {
    //         case
    //     }
    // }
    const [focus, setFocus] = useState<typeof focusState>(focusState);

    // const formik = useFormik({
    //     initialValues: {
    //         name: '',
    //         phone: '',
    //         email: '',
    //     },
    //     onSubmit: values => {
    //         alert(JSON.stringify(values, null, 2));
        
    //     },
    // });

        // validationSchema: Yup.object().shape({
        //     name: Yup.string().min(2, 'слишком короткое!') .max(50, 'Слишком длинное!').required('Обязательное поле'),
        //     email: Yup.string().email('Неправильный email').required('Обязательное поле'),
        //     phone: Yup.string().test({
        //         name:  'phone',
        //         exclusive: false,
        //         message: 'Неверный формат',
        //         test: (value) => typeof value !== 'undefined' && new RegExp(`^375\\d{9}$`, 'g').test(value.replace(/\D+/g, '')),
        //         params: {}
        //     })
        //   })

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
            id={''}
            classes={{
                classesSection: ['consultation'],
                classesTitle: [''],
                classesWrapper: ['consultation_wrapper']
            }}
            title='Закажите бесплатную консультацию'
        >
{/* 
            <form id="consultation-form" className="consultation_form" onSubmit={formik.handleSubmit}>
                <div className="form_name">   
                    <label  htmlFor="name" data-type="name" className={classNames(focus.name ? 'focus' : '', (formik.errors.name && formik.errors.name !== '') ? 'error' : '')}>
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
                    {formik.errors.name && <div className={'error'}>{formik.errors.name}</div>}
                </div>
               
                <div className="form_phone">
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
                    {formik.errors.phone && <div className={'error'}>{formik.errors.phone}</div>}
                </div>
                
                <div className="form_email">      
                    <label htmlFor="email" data-type="email" className={classNames(focus.email ? 'focus' : '', (formik.errors.email && formik.errors.email !== '') ? 'error' : '')}>
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
                    {formik.errors.email && <div className={'error'}>{formik.errors.email}</div>}
                </div>
                <div className="consultation_form__button">
                    <button type="submit">Получить консультацию</button>
                    <span></span>
                </div>
                <div style={{color: 'white'}}>{JSON.stringify(SignupSchema, null, 2)}</div>
            </form> */}
            <Formik 
            initialValues={{ 
                email: '', 
                name: '', 
                phone: '' 
            }}
            validationSchema={Yup.object({

                name: Yup.string().min(2, 'слишком короткое!') .max(50, 'Слишком длинное!').required('Обязательное поле'),
       
                  email: Yup.string().email('Неправильный email').required('Обязательное поле'),
       
                  phone: Yup.string().test({
                            name:  'phone',
                            exclusive: false,
                            message: 'Неверный формат',
                            test: (value) => typeof value !== 'undefined' && new RegExp(`^375\\d{9}$`, 'g').test(value.replace(/\D+/g, '')),
                            params: {}
                        })
              })}
       
              onSubmit={(values, { setSubmitting }) => {
       
                setTimeout(() => {
       
                  alert(JSON.stringify(values, null, 2));
       
                  setSubmitting(false);
       
                }, 400);
       
              }}
            >
                 {({ errors, touched, values, handleChange, handleBlur, handleSubmit, isSubmitting, }) => (
                    <Form id="consultation-form" className="consultation_form">
                        <div className="form_name">
                            <label htmlFor="name" data-type="name" className={classNames(focus.name ? 'focus' : '', (errors.name && errors.name !== '') ? 'error' : '')}>
                                <Field  
                                    // validate={validateName} 
                                    name="name"  
                                    value={values.name} 
                                    onChange={handleChange} 
                                    onFocus={() => handleFocusBlur('name')} 
                                    onBlur={(e: any) => handleFocusBlur('name', Boolean(e.target.value))}
                                    // required

                                />
                                <span>Ваше имя</span>
                                {/* {errors.name && touched.name ? (<div style={{color: 'red'}}>{errors.name}</div>) : null} */}
                                <ErrorMessage name="name"/>
                            </label>
                        </div>
                        <div className="form_phone">
                            <label htmlFor="phone" data-type="phone" className={classNames(focus.phone ? 'focus' : '', (errors.phone && errors.phone !== '') ? 'error' : '')}>
                                <Field 
                                    name="phone" 
                                    // validate={validatePhone} 
                                    component={()=> (                
                                        <InputMask 
                                            mask="+375 (99) 999-99-99" 
                                            id="phone" 
                                            name="phone" 
                                            type="tel" 
                                            onChange={handleChange}
                                            value={values.phone}
                                            onFocus={() => handleFocusBlur('phone')}
                                            onBlur={(e: any) => handleFocusBlur('phone', Boolean(e.target.value))}
                                            // required 
                                            />)
                                    }
                                />
                                <span>Ваш телефон</span>
                                {/* {errors.phone && touched.phone ? (<div style={{color: 'red'}}>{errors.phone}</div>) : null} */}
                                <ErrorMessage name="phone"/>
                            </label>
                        </div>
                        <div className="form_email">
                            <label htmlFor="email" data-type="email" className={classNames(focus.email ? 'focus' : '', (errors.email && errors.email !== '') ? 'error' : '')}>
                                <Field 
                                    // validate={validate} 
                                    name="email" 
                                    value={values.email}
                                    onChange={handleChange}
                                    onFocus={() => handleFocusBlur('email')}
                                    onBlur={(e: any) => handleFocusBlur('email', Boolean(e.target.value))}
                                    required
                                />
                            <span>Ваш e-mail</span>
                            {/* {errors.email && touched.email ? <div style={{color: 'red'}}>{errors.email}</div> : null} */}
                            <ErrorMessage name="email"/>
                            </label>
                        </div>
                        <div className="consultation_form__button">
                            <button type="submit" disabled={isSubmitting}>Получить консультацию</button>
                            <span></span>
                            <div style={{color: 'white'}}>{JSON.stringify(errors, null, 2)}</div>
                        </div>
                    </Form>
                 )}

            </Formik>

        </Section>
    )
}

export default Consultation;