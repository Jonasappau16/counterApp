import React from 'react';

const Subtract = (props) => {
    const {countDown} = props
    return (
        <div>
          <button onClick = {countDown} className='d-btn'> - </button>
        </div>
      )
}
export default Subtract