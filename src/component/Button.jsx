import React, { useState } from 'react'

const Button = () => {

    const [score, setScore] = useState(0)

    return (

        <div className="card-btn">
            <p className="count">{score}</p>
            <button className="btn-plus" onClick={() => setScore(score + 1)}>+</button>
        </div>
    )
}

export default Button
