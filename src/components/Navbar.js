import React from 'react';

function Navbar() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if (hours < 12){
        timeOfDay = "morning"
    }
    else if (hours >= 12 && hours < 17){
        timeOfDay = "afternoon"
    }
    else {
        timeOfDay = "night"
    }

    const spanStyle = {// use html "style" as a js object
        color: "yellow",
        fontSize: 30// turn dashed words into camelCase // pixel units can be tretead as number, JSX will assume it to be "30px"
    }

    return (
    <nav className="header">
        <h1>Good {timeOfDay}, <span style={spanStyle}>Sunshine!</span></h1>
    </nav>
    );
}

export default Navbar;