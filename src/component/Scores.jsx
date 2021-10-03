import React from 'react'
import Button from './Button'

const Scores = () => {
    const cardArrays = [
        {
            name: "Max",
            key: 1
        },
        {
            name: "John",
            key: 2
        },
        {
            name: "Sarah",
            key: 3
        },
        {
            name: "Mark",
            key: 4
        }
    ]
    return (
        <div>
            {
                cardArrays.map(cardArray => (
                    <div className="sub-card-one" key={cardArray.key}>
                        <div><p className="name">{cardArray.name}</p></div>
                        <Button />
                    </div>   
                ))
            }   
        </div>
    )
}

export default Scores
