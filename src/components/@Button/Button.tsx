import React from 'react';
import classNames from 'classnames';

import './scss/style.scss';

interface PropTypes {
    children: React.ReactChild
    classes?: string[]         //массив строк
    onClick: () => void
}

const Button: React.FC<PropTypes> = ({children, classes = [], onClick}) => {
    return (
        <button  type="submit" className={classNames('button', ...classes)} onClick={onClick}>
            <span>{children}</span>
        </button>
    )
}

export default Button;