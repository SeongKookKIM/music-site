import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Background() {
  const [timeBg, setTimeBg] = useState("");
  const [backTimeHours, setBackTimeHours] = useState(new Date().getHours());
  const [backTimeSec, setBackTimeSec] = useState(new Date().getSeconds());

  // Time
  let bgList = useSelector((state) => state.backgroundVideo);

  useEffect(() => {
    let bgTimer = setInterval(() => {
      setBackTimeHours(new Date().getHours());
      setBackTimeSec(new Date().getSeconds());
    }, 1000);

    if (backTimeHours >= 6 && backTimeHours < 17) {
      setTimeBg(bgList[0]);
    } else if (backTimeHours >= 17 && backTimeHours < 20) {
      setTimeBg(bgList[1]);
    } else {
      setTimeBg(bgList[2]);
    }

    return () => {
      clearInterval(bgTimer);
    };
  }, [backTimeSec]);

  return (
    <div className="bg">
      <video autoPlay muted loop src={timeBg} type="video/mp4"></video>
    </div>
  );
}

export default Background;
