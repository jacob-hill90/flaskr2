import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import FormSignUp from "./pages/FormSignUp";

function App() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("http://127.0.0.1:5000/react")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       console.log(data);
  //     });
  // }, []);

  // STARTING HEREE///////////
  const [user, setUser] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState(null);
  const [bigWeatherIcon, setbigWeatherIcon] = useState(null);
  const [temp, setTemp] = useState(null);
  const [city, setCity] = useState(null);
  const [description, setDescription] = useState(null);
  const [high, setHigh] = useState(null);
  const [low, setLow] = useState(null);
  const [sunrise, setSunrise] = useState(null);
  const [sunset, setSunset] = useState(null);
  const [wind, setWind] = useState(null);
  const [fullWeather, setFullWeather] = useState(null);
  const [humidity, setHumidity] = useState(null);

  // Forecast usestates
  const [dayOneTemp, setDayOneTemp] = useState(null);
  const [dayOneDescription, setDayOneDescription] = useState(null);
  const [dayOneIcon, setDayOneIcon] = useState(null);
  const [dayOneWind, setDayOneWind] = useState(null);
  const [dayOneUnixTime, setDayOneUnixTime] = useState(null);

  const [dayTwoTemp, setDayTwoTemp] = useState(null);
  const [dayTwoDescription, setDayTwoDescription] = useState(null);
  const [dayTwoIcon, setDayTwoIcon] = useState(null);
  const [dayTwoWind, setDayTwoWind] = useState(null);
  const [dayTwoUnixTime, setDayTwoUnixTime] = useState(null);

  const [dayThreeTemp, setDayThreeTemp] = useState(null);
  const [dayThreeDescription, setDayThreeDescription] = useState(null);
  const [dayThreeIcon, setDayThreeIcon] = useState(null);
  const [dayThreeWind, setDayThreeWind] = useState(null);
  const [dayThreeUnixTime, setDayThreeUnixTime] = useState(null);

  const [dayFourTemp, setDayFourTemp] = useState(null);
  const [dayFourDescription, setDayFourDescription] = useState(null);
  const [dayFourIcon, setDayFourIcon] = useState(null);
  const [dayFourWind, setDayFourWind] = useState(null);
  const [dayFourUnixTime, setDayFourUnixTime] = useState(null);

  const [dayFiveTemp, setDayFiveTemp] = useState(null);
  const [dayFiveDescription, setDayFiveDescription] = useState(null);
  const [dayFiveIcon, setDayFiveIcon] = useState(null);
  const [dayFiveWind, setDayFiveWind] = useState(null);
  const [dayFiveUnixTime, setDayFiveUnixTime] = useState(null);

  // useEffect(() => {
  //   let response = whoAmI().then((response) => {
  //     setUser(response);
  //   });
  // }, []);

  return (
    <BrowserRouter>
      <NavBar user={user} temp={temp} weatherIcon={weatherIcon} />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/signup" element={<FormSignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
