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
      <div className="d-flex flex-column align-items-center">
        <h1 className="">Timer: {sessionLength}</h1>
        <div className="d-flex align-items-center">
          <h1 className="">Break: {breakLength}</h1>
          <div className="d-flex flex-column ms-3">
            <button
              className="btn btn-primary fs-3"
              onClick={() => setBreakLength(breakLength + 1)}
            >
              ⬆️
            </button>
            <button
              className="btn btn-primary fs-3"
              onClick={() => setBreakLength(breakLength - 1)}
            >
              ⬇️
            </button>
          </div>
        </div>

        <button className="btn btn-primary" onClick={handleClick}>
          Start
        </button>
      </div>
    </>
  );
};

export default Clock;
