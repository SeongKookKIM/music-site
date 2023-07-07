import React from "react";

function Time() {
  return (
    <div className="time">
      <h3>
        {new Date().getHours()}
        {new Date().getMinutes()}
        {new Date().getSeconds()}
      </h3>
    </div>
  );
}

export default Time;
