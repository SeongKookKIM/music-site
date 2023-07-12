import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handlerAudio } from "../Store";

function Background() {
  const [timeBg, setTimeBg] = useState("");
  const [backTimeHours, setBackTimeHours] = useState(new Date().getHours());
  const [backTimeSec, setBackTimeSec] = useState(new Date().getSeconds());
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [weather, setWeather] = useState({});

  let dispatch = useDispatch();

  // 날씨

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      setLatitude(lat);
      setLongitude(lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=904ccd662ecc191d3296c2a1bbd98138&units=metric`;
    let res = await fetch(url);
    let data = await res.json();
    setWeather(data.weather[0].main);
  };
  useEffect(() => {
    getCurrentLocation();
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      setTimeout(() => {
        getWeatherByCurrentLocation(latitude, longitude);
      }, 100);
    }
  }, [latitude]);

  // Time
  let bgList = useSelector((state) => state.backgroundVideo);
  let bgRainList = useSelector((state) => state.backgroundRainVideo);
  let bgTravelList = useSelector((state) => state.backgroundTravelVideo);
  let bgDriveList = useSelector((state) => state.backgroundDriveVideo);
  let bgSadList = useSelector((state) => state.backgroundSadVideo);
  let bgStudyList = useSelector((state) => state.backgroundStudyVideo);
  let musicSelected = useSelector((state) => state.musicSelected);

  useEffect(() => {
    let bgTimer = setInterval(() => {
      setBackTimeHours(new Date().getHours());
      setBackTimeSec(new Date().getSeconds());
    }, 1000);

    if (musicSelected.name == "rain") {
      if (backTimeHours >= 6 && backTimeHours < 18) {
        setTimeBg(bgRainList[0]);
        dispatch(
          handlerAudio({
            src: "assets/image/music/rain-day.mp3",
          })
        );
      } else {
        setTimeBg(bgRainList[1]);
        dispatch(
          handlerAudio({
            src: "assets/image/music/rain-night.mp3",
          })
        );
      }
    } else if (musicSelected.name == "drive") {
      setTimeBg(bgDriveList[0]);
      dispatch(
        handlerAudio({
          src: "assets/image/music/drive.mp3",
        })
      );
    } else if (musicSelected.name == "sad") {
      if (backTimeHours >= 6 && backTimeHours < 18) {
        setTimeBg(bgSadList[0]);
        dispatch(
          handlerAudio({
            src: "assets/image/music/sad-day.mp3",
          })
        );
      } else {
        setTimeBg(bgSadList[1]);
        dispatch(
          handlerAudio({
            src: "assets/image/music/sad-night.mp3",
          })
        );
      }
    } else if (musicSelected.name == "travel") {
      if (backTimeHours >= 6 && backTimeHours < 18) {
        setTimeBg(bgTravelList[0]);
        dispatch(
          handlerAudio({
            src: "assets/image/music/travel-day.mp3",
          })
        );
      } else {
        setTimeBg(bgTravelList[1]);
        dispatch(
          handlerAudio({
            src: "assets/image/music/travel-night.mp3",
          })
        );
      }
    } else if (musicSelected.name == "study") {
      if (backTimeHours >= 6 && backTimeHours < 18) {
        setTimeBg(bgStudyList[0]);
        dispatch(
          handlerAudio({
            src: "assets/image/music/attention-1.mp3",
          })
        );
      } else {
        setTimeBg(bgStudyList[1]);
        dispatch(
          handlerAudio({
            src: "assets/image/music/attention-2.mp3",
          })
        );
      }
    } else {
      if (weather == "Clear") {
        if (backTimeHours >= 6 && backTimeHours < 17) {
          setTimeBg(bgList[0]);
          dispatch(
            handlerAudio({
              src: "assets/image/music/day.mp3",
            })
          );
        } else if (backTimeHours >= 17 && backTimeHours < 20) {
          setTimeBg(bgList[1]);
          dispatch(
            handlerAudio({
              src: "assets/image/music/sunset.mp3",
            })
          );
        } else {
          setTimeBg(bgList[2]);
          dispatch(
            handlerAudio({
              src: "assets/image/music/night.mp3",
            })
          );
        }
      } else if (weather == "Rain" || weather == "Mist") {
        if (backTimeHours >= 6 && backTimeHours < 18) {
          setTimeBg(bgRainList[0]);
          dispatch(
            handlerAudio({
              src: "assets/image/music/rain-day.mp3",
            })
          );
        } else {
          setTimeBg(bgRainList[1]);
          dispatch(
            handlerAudio({
              src: "assets/image/music/rain-night.mp3",
            })
          );
        }
      } else if (weather == "Clouds") {
        if (backTimeHours >= 6 && backTimeHours < 18) {
          setTimeBg(bgStudyList[0]);
          dispatch(
            handlerAudio({
              src: "assets/image/music/attention-1.mp3",
            })
          );
        } else {
          setTimeBg(bgStudyList[1]);
          dispatch(
            handlerAudio({
              src: "assets/image/music/attention-2.mp3",
            })
          );
        }
      } else {
        if (backTimeHours >= 6 && backTimeHours < 17) {
          setTimeBg(bgList[0]);
          dispatch(
            handlerAudio({
              src: "assets/image/music/day.mp3",
            })
          );
        } else if (backTimeHours >= 17 && backTimeHours < 20) {
          setTimeBg(bgList[1]);
          dispatch(
            handlerAudio({
              src: "assets/image/music/sunset.mp3",
            })
          );
        } else {
          setTimeBg(bgList[2]);
          dispatch(
            handlerAudio({
              src: "assets/image/music/night.mp3",
            })
          );
        }
      }
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
