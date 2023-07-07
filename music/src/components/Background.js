import React from "react";

function Background() {
  return (
    <div className="bg">
      <video autoPlay muted loop>
        <source src="assets/video/day.mp4"></source>
      </video>
    </div>
  );
}

export default Background;
