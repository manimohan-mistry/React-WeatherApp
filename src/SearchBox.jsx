import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
export default function SearchBox({ updateInfo }) {
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "7ec8d5241569f113a91e9a0c2fc4d766";

    let [city, setCity] = useState('');
    const [error, setError] = useState(false);

    async function getWeatherInfo() {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            }
            console.log(result);
            return result;

        } catch (err) {
            throw err;
        }
    }


    function handleChange(event) {
        setCity(event.target.value);
    }

    async function preventDefault(event) {
        try {
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        } catch (err) {
            setError(true);
        }

    }
    return (
        <div className='searchBox'>
            <form action="" onSubmit={preventDefault}>
                <TextField id="city" label="City Weather" variant="outlined" color='secondary'
                    required value={city} onChange={handleChange} className='TextField'/>
                <br /><br />
                <Button color="secondary" variant='outlined' type='submit'
                >Search</Button>
            </form>
            {
                error && <p style={{color: "red"}}>No such place data available</p>
            }
        </div>
    )
}