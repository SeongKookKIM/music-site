import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useSelector } from "react-redux";

function Player() {
  let musicAudio = useSelector((state) => state.musicAudio);
  return (
    <div className="audio-wrapper">
      <AudioPlayer
        src={musicAudio.src}
        hasDefaultKeyBindings={true}
        autoPlay={true}
        loop={true}
        volume="0.5"
        preload="metadata"
      />
    </div>
  );
}

export default Player;
