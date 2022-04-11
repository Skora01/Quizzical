import React from "react"

function Start(props) {
    return (
            <div className="start--flex">
                <h1>Quizzcal</h1>
                <p>My first React project</p>
                <button 
                    className="start__btn"
                    onClick={props.handleClick}
                >Start quiz</button>
            </div>
    )
}

export default Start