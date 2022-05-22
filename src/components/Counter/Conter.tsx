import React, {useState} from "react";

import classNames from 'classnames';

import './scss/style.scss';

const Counter: React.FC = () => {
    const [count, setCount] = useState(0);

    function changeCount () {
        setCount(count === 5? count: count +1);
    }

    function resetCount () {
        setCount(0);
    }

    return (
           <section className='counter'>
               <div className="counter_wrapper">
                   <div className="counter_numbers">
                       <div className={classNames(count === 5? 'item_red': '')}>{count}</div>
                   </div>
                   <div className="counter_buttons">
                       <div className={classNames(count >= 5? 'button_disabled': 'button_enabled')} onClick={() => changeCount()}>inc</div>
                       <div className={classNames(count > 0? 'button_enabled': 'button_disabled')} onClick={() => count > 1? resetCount (): count}>reset</div>
                   </div>
               </div>
           </section>
    )
}

export default Counter;