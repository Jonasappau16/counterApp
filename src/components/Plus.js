 import React from 'react';

const Plus = (props) => {
    const {countUp} = props

    return (
        <div>
         <button onClick ={countUp} className="plus">+</button>
        </div>
    )
}
export default Plus

