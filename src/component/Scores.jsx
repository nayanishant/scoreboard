import React, { useState } from 'react'

const Scores = (props) => {
    const [count, setCount] = useState(0)
    return (
        <div className="sub-card-one">
            <p className="name">{props.name}</p>
            <p className="count">{count}</p>
            <button className="btn-plus" onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}

export default Scores
