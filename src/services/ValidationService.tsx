
export const VALIDATE_NAME  = 'name';
export const VALIDATE_EMAIL = 'email';
export const VALIDATE_PHONE = 'phone';

export const ERROR_REQUIRE_FIELD = 'Обязательное поле';
export const ERROR_PHONE         = 'Некорректный телефон';
export const ERROR_EMAIL         = 'Некорректный email';
export const ERROR_NAME          = 'Имя должно быть не меньше 3 и не больше 20 символов';

export type validateTypes = typeof VALIDATE_NAME | typeof VALIDATE_EMAIL | typeof VALIDATE_PHONE;

export interface validationResponseInterface {
    isValid: boolean
    errors: string[]
    value: string
}

/**
 * @class ValidationService
 */
class ValidationService {
    private readonly types;

    /**
     * @constructor
     */
    constructor() {
        this.validateName  = this.validateName.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.validatePhone = this.validatePhone.bind(this);

        this.types = {
            name: this.validateName,
            email: this.validateEmail,
            phone: this.validatePhone,
        };
    }

    /**
     * @public
     * @method validate
     * @this ValidationService
     * @param {string} type
     * @param {string} value
     * @returns {function}
     */
    public validate(type: validateTypes, value: string) {
        return this.types[type](value);
    }

    /**
     * @private
     * @method validateName
     * @this ValidationService
     * @param {string} value
     * @returns {object}
     */
    private validateName(value: string): validationResponseInterface {
        const errors: string[] = [];
        let isValid: boolean = true;

        if(this.isEmptyValue(value)) {
            isValid = false;
            errors.push(ERROR_REQUIRE_FIELD);
            return this.createValidateResponse(isValid, errors, value);
        }

        const cleanValue = value.trim();

        if(cleanValue.length < 3 || cleanValue.length > 20) {
            errors.push(ERROR_NAME);
            isValid = false;
        }

        return this.createValidateResponse(isValid, errors, value);
    }

    /**
     * @private
     * @method validateEmail
     * @this ValidationService
     * @param {string} value
     * @returns {object}
     */
    private validateEmail(value: string): validationResponseInterface {
        const errors: string[] = [];

        if(this.isEmptyValue(value)) {
            errors.push(ERROR_REQUIRE_FIELD);
            return this.createValidateResponse(false, errors, value);
        }

        const cleanValue = value.trim();
        const test = new RegExp('(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])', 'g').test(cleanValue);

        !test && errors.push(ERROR_EMAIL);

        return this.createValidateResponse(test, errors, value);
    }

    /**
     * @private
     * @method validatePhone
     * @this ValidationService
     * @param {string} value
     * @returns {object}
     */
    private validatePhone(value: string): validationResponseInterface {
        const errors: string[] = [];

        if(this.isEmptyValue(value)) {
            errors.push(ERROR_REQUIRE_FIELD);
            return this.createValidateResponse(false, errors, value);
        }

        const cleanValue = value.replace(/\D+/g, '').trim();
        const test = new RegExp(`^375\\d{9}$`, 'g').test(cleanValue);

        !test && errors.push(ERROR_PHONE);

        return this.createValidateResponse(test, errors, value);
    }

    /**
     * @public
     * @method isEmptyValue
     * @this ValidationService
     * @param {string} value
     * @returns {boolean}
     */
    public isEmptyValue(value: string): boolean {
        return value === '';
    }

    /**
     * @protected
     * @method createValidateResponse
     * @this ValidationService
     * @param {boolean} isValid
     * @param {array} errors
     * @param {string} value
     * @returns {object}
     */
    protected createValidateResponse(isValid: boolean, errors: string[], value: string): validationResponseInterface {
        return {
            isValid,
            errors,
            value,
        }
    }
}

export default new ValidationService();