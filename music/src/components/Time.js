import React, { useEffect, useState } from "react";

function Time() {
  let [currentTime, setCurrentTime] = useState(
    `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`
  );

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
      <h3>{currentTime}</h3>
    </div>
  );
}

export default Time;
