import React, { useState } from "react";
import InputNumber from "./components/InputNumber";

function StrokeCount() {
    const [numberOfHoles, setNumberOfHoles] = useState("");

    const SetNumberOfHoles = (numberFound) => {        
        setNumberOfHoles(numberFound)
        console.info("Number of holes changed to " + numberOfHoles);
    }

    // const isValidNumber = event => {        
    //     setNumberOfHoles(event.target.value);

    //     console.info("New value is " + numberOfHoles)
    // }

    return (
        <div className="App">
        <header className="App-header">
            <h2>How many holes are you playing?</h2>
            <br/>        
            <textarea value={numberOfHoles} readOnly={true}/>
            <InputNumber setFunction={SetNumberOfHoles}/>
        </header>
        </div>
  );
}

export default StrokeCount;
