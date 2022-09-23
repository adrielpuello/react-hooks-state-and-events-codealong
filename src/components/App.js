import React from "react";
import Toggle from "./Toggle";

function Header({isOn}) {
  return <h3>{isOn ? "It's on" : "It's off"}</h3>
} 

function App() {
  return (
    <div>
      <Header/>
      <Toggle />
    </div>
  );
}

export default App;
