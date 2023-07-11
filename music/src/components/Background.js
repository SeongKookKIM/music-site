import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Background() {
  const [timeBg, setTimeBg] = useState("");
  const [backTimeHours, setBackTimeHours] = useState(new Date().getHours());
  const [backTimeSec, setBackTimeSec] = useState(new Date().getSeconds());
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [weather, setWeather] = useState({});

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
    setWeather(data);
    // console.log(weather.weather[0].main);
    // console.log(weather);
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
