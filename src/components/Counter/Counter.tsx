import React, {useState} from "react";

import classNames from 'classnames';

import './scss/style.scss';

const Counter: React.FC = () => {
    const [count, setCount] = useState(0);

    return (
           <section className='counter'>
               <div className="counter_wrapper">
                   <div className="counter_numbers">
                       <div className={classNames({'item_red': count === 5})}>{count}</div>
                   </div>
                   <div className="counter_buttons">
                       <div className={classNames({'button_disabled': count >= 5, 'button_enabled': count < 5})} onClick={() => setCount(prev => prev === 5 ? prev : ++prev)}>inc</div>
                       <div className={classNames({'button_enabled': count > 0, 'button_disabled': count === 0})} onClick={() => setCount(0)}>reset</div>
                   </div>
               </div>
           </section>
    )
}

export default Counter;