// import './App.css';
import CountDown from "./components/CountDown" ;
import { useState } from "react";
import Firework from "./components/Firework";


function App() {

  return (
    <div className="App">
      <CountDown   />
      <Firework />
    </div>
  );
}

export default App;
