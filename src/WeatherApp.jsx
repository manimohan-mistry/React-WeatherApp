import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import "./WeatherApp.css";
export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 28.84,
        temp: 25.05,
        humidity: 47.00,
        tempMin: 25.05,
        tempMax: 25.99,
        weather: "haze",
    })

    function updateInfo(result) {
        setWeatherInfo(result);
    }
    return (
        <div className="WeatherApp">
            <h2 style={{color: "orange"}}>Weather App</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )
}