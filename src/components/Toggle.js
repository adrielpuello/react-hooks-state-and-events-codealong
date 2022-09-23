import React, {useState} from "react";

function Toggle() {


  const [isOn, setIsOn] = useState(true)

  function handleClick(e){
    setIsOn(!isOn)
  }

  return <button onClick={handleClick}>{isOn ? "On" : "Off"}</button>;
}


export default Toggle;
