import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Background() {
  const [timeBg, setTimeBg] = useState("");

  // Time
  let bgList = useSelector((state) => state.backgroundVideo);

  useEffect(() => {
    let hours = new Date().getHours();
    if (hours >= 6 && hours < 17) {
      setTimeBg(bgList[0]);
    } else if (hours >= 17 && hours < 20) {
      setTimeBg(bgList[1]);
    } else {
      setTimeBg(bgList[2]);
    }
  }, []);

  return (
    <div className="bg">
      <video autoPlay muted loop>
        <source src={timeBg}></source>
      </video>
    </div>
  );
}

export default Background;
