import React, { useState, useEffect } from "react";

function Stopwatch() {
  const [timeinSec, setTimeinSec] = useState(0);
  const [timerOn, setTimierOn] = useState(false);
  useEffect(() => {
    let myTimer;
    console.log("Timer is ON or OFF", timerOn);
    if (timerOn) {
      myTimer = setInterval(() => {
        setTimeinSec((prevState) => prevState + 1);
      }, 1000);
    } else {
      clearInterval(myTimer);
    }
    return () => clearInterval(myTimer);
  }, [timerOn]);

  const startHandler = () => {
    console.log("Start Handler");
    //setTimierOn(!timerOn);
    setTimierOn((preTimerState) => !preTimerState);
    //setTimeinSec((prevState) => prevState + 1);
  };
  const resetHandler = () => {
    console.log("Reset Handler");
    setTimierOn(false);
    setTimeinSec((prevState) => (prevState = 0));
  };
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "10px",
        padding: "10px",
        border: "8px solid black",
        borderRadius: "12px",
      }}
    >
      <div>
        <h1>Stopwatch</h1>
        <h2>Time: {formatTime(timeinSec)}</h2>
        <button onClick={startHandler}>{timerOn ? "Stop" : "Start"}</button>
        <button onClick={resetHandler}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;
