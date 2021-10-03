import React, { useState } from 'react'

const Button = () => {

    const [count, setCount] = useState(0)

    return (

        <div className="card-btn">
            <p className="count">{count}</p>
            <button className="btn-plus" onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}

export default Button
