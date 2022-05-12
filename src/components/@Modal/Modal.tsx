import React, {
    useState, useEffect,
}                           from 'react';
import ReactDOM from 'react-dom';
import classNames           from 'classnames';
import InputMask            from 'react-input-mask';

import validationService, {
    validateTypes
}                           from '../../services/ValidationService';

import './scss/style.scss';
import close from './public/icons/close.png';

const initialState = {
    name: false,
    phone: false,
    email: false,
};

const valuesState = {
    name: '',
    phone: '',
    email: '',
};

interface PropsType {
    onClose: any
}   


const Modal: React.FC<PropsType> = ({onClose}) => {

    const [container] = useState(() => document.createElement('div'))

    useEffect(() => {
        document.body.appendChild(container);

        return () => {
            document.body.removeChild(container);
        }
    })
    const [focus, setFocus]   = useState<typeof initialState>(initialState);
    const [values, setValues] = useState<typeof valuesState>(valuesState);
    const [errors, setErrors] = useState<typeof initialState>(initialState);

    const handleFocus = (key: validateTypes): void => {
        setFocus(prevState => {
            return {
                ...prevState,
                [key]: true
            }
        });
    };

    const handleBlur = (key: validateTypes, event: React.FocusEvent<HTMLInputElement>): void => {
        const {isValid, errors} = validationService.validate(key, event.target.value);

        setErrors(prevState => {
            return {
                ...prevState,
                [key]: errors.length > 0 ? errors[0] : false,
            }
        })

        setFocus(prevState => {
            return {
                ...prevState,
                [key]: !isValid || !validationService.isEmptyValue(event.target.value),
            }
        });
    };

    const handleChange = (key: string, event: React.ChangeEvent<HTMLInputElement>) => {
        setValues(prevState => {
            return {
                ...prevState,
                [key]: event.target.value,
            }
        });
    };

    const handleSubmit = (e: any) => {

    };

        return ReactDOM.createPortal( 

                <section className="modal">
                <div className="modal_bg" onClick={onClose}></div>
                <div className="modal_wrapper">
                    <form id="modal-form" className="modal_form" onSubmit={handleSubmit}>
                        <div className="form_name">
                            <label  htmlFor="name" className={classNames(focus.name ? 'focus' : '', errors.name ? 'error' : '')}>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    onChange={e => handleChange('name', e)}
                                    value={values.name}
                                    onFocus={() => handleFocus('name')}
                                    onBlur={e => handleBlur('name', e)}
                                    required
                                />
                                <span>Ваше имя</span>
                            </label>
                            {errors.name && <div className={'error'}>{errors.name}</div>}
                        </div>
                        <div className="form_phone">
                            <label htmlFor="phone" className={classNames(focus.phone ? 'focus' : '', errors.phone ? 'error' : '')}>
                            <InputMask
                                mask="+375 (99) 999-99-99"
                                id="phone"
                                name="phone"
                                type="tel"
                                onChange={(e: any) => handleChange('phone', e)}
                                value={values.phone}
                                onFocus={() => handleFocus('phone')}
                                onBlur={(e: any) => handleBlur('phone', e)}
                                required
                            />
                                <span>Ваш телефон</span>
                            </label>
                            {errors.phone && <div className={'error'}>{errors.phone}</div>}
                        </div>
                        <div className="form_email">
                            <label htmlFor="email" className={classNames(focus.email ? 'focus' : '', errors.email ? 'error' : '')}>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    onChange={(e: any) => handleChange('email', e)}
                                    value={values.email}
                                    onFocus={() => handleFocus('email')}
                                    onBlur={(e: any) => handleBlur('email', e)}
                                    required
                                />
                                <span>Ваш e-mail</span>
                            </label>
                            {errors.email && <div className={'error'}>{errors.email}</div>}
                        </div>
                        <div className="modal_form__button">
                            <button type="submit">Получить консультацию</button>
                            <span></span>
                        </div>
                    </form>

                    <img className="modal_close" src={close} onClick={onClose}/>
                </div>
            </section>,
            container
        );
    }

export default Modal;