import React from 'react'

const Reset = (props) => {
    const { reset } = props

    return (
        <div>
            <button onClick = {reset} className ="reset-btn">Reset</button>
        </div>
    )
}

export default Reset