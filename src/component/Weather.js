import React, { useEffect, useState } from "react";

const Weather = () => {
    const [coords, saveCoords] = useState();
    const [temp, setTemp] = useState();
    const [weather, setWeather] = useState();

    useEffect(() => {
        function handleGeoSucc(position) {
            console.log(position);
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const coordsObj = {
                latitude,
                longitude
            };
            saveCoords(coordsObj);
            getWeather(latitude, longitude);
        }

        function handleGeoErr(err) {
            console.log("geo err! " + err);
        }

        function requestCoords() {
            navigator.geolocation.getCurrentPosition(handleGeoSucc, handleGeoErr);
        }

        function getWeather(lat, lon) {
            fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${'c4fdb10e2a7d089d306466c6f527d261'}&units=metric`
            )
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    const temp = data.main.temp;
                    const weather = data.weather[data.weather.length - 1].main;
                    setTemp(temp);
                    setWeather(weather);
                });
        }

        requestCoords();
    }, []);


    return (
        <div>
            {temp && <p>Temperature: {temp}°C</p>}
            {weather && <p>Weather: {weather}</p>}
        </div>
    );
};

export default Weather;
