import { useState } from "react";

const Clock = () => {
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);

  // TODO: Upgrade timer from seconds to minutes
  const handleClick = () => {
    let i = sessionLength;
    const interval = setInterval(() => {
      if (i <= 1) {
        clearInterval(interval);
      }
      i--;
      setSessionLength(i);
    }, 1000);
  };

  return (
    <>
      <h1 className="text-center">{sessionLength}</h1>
      <button className="btn btn-primary" onClick={handleClick}>
        Start
      </button>
    </>
  );
};

export default Clock;
