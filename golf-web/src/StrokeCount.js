import React, { useState } from "react";
import InputNumber from "./components/InputNumber";

function StrokeCount() {
    const [numberOfHoles, setNumberOfHoles] = useState("");

    const SetNumberOfHoles = (numberFound) => {        
        setNumberOfHoles(numberFound)
        console.info("Number of holes changed to " + numberOfHoles);
    }

    const HandleSubmit = () => {
        console.info("Number passed is " + numberOfHoles);
    }

    return (
        <div className="App">
        <header className="App-header">
            
        <h2>How many holes are you playing?</h2>     
        <h4>{numberOfHoles}</h4>
        <InputNumber setFunction={SetNumberOfHoles}/>
        <button type='submit' onClick={HandleSubmit}>Submit</button>
       
        </header>
        </div>
  );
}

export default StrokeCount;
