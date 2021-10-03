import React from 'react'
import Scores from './Scores'

const Scoreboard = () => {
    return (
        <div className="main-card">
            <header className="header">
                <h1>Scoreboard</h1>
            </header>
            <main className="main-container">
                <Scores name="Mohit"/>
                <Scores name="Sarah"/>
                <Scores name="Mike"/>
                <Scores name="John"/>
            </main>
        </div>
    )
}

export default Scoreboard
