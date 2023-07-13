import React, { useDeferredValue, useEffect, useState } from "react";

function Time() {
  let [currentTime, setCurrentTime] = useState(
    `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`
  );

  let stateCurrentTIme = useDeferredValue(currentTime);

  useEffect(() => {
    let timer = setInterval(() => {
      setCurrentTime(
        `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`
      );
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="time">
      <h3>{stateCurrentTIme}</h3>
    </div>
  );
}

export default Time;
