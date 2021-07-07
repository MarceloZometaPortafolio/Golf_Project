import React, { useState } from "react";
import InputNumber from "./components/InputNumber";

function StrokeCount() {
    const [numberOfHoles, setNumberOfHoles] = useState("");

    const SetNumberOfHoles = (numberFound) => {        
        setNumberOfHoles(numberFound)
        console.info("Number of holes changed to " + numberOfHoles);
    }

    return (
        <div className="App">
        <header className="App-header">
            <h2>How many holes are you playing?</h2>     
            <h4>{numberOfHoles}</h4>
            <InputNumber setFunction={SetNumberOfHoles}/>
        </header>
        </div>
  );
}

export default StrokeCount;
