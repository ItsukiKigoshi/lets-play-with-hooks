import React, { useState } from "react";

import "./App.css";

function App() {
  const charms: string[] = ["大吉", "中吉", "小吉", "末吉", "もち吉", "凶"];
  const [charm, setCharm] = useState("Fortune");
  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * charms.length);
    const newCharm = charms[randomNumber];
    setCharm(newCharm);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Let's play with Hooks!</p>
        <h1>{charm}</h1>
        <button onClick={handleClick}>I'm Feeling Lucky</button>
      </header>
    </div>
  );
}

export default App;
