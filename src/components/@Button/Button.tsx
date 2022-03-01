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
        <div className={classNames('button', ...classes)} onClick={onClick}>
            {children}
        </div>
    )
}

export default Button;