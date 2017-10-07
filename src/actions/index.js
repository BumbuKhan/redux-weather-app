import axios from 'axios';
const API_KEY = 'b84dc084fe71415ebc2204718170510';
// const API_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`; // this API doesn't work for me :-(
const API_URL = `http://api.apixu.com/v1/forecast.json?key=${API_KEY}`;

export const FETCH_WEATHER = 'FETCHE_WEATHER';

export function fetchWeather(city) {
    const url = `${API_URL}&q=${city}`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}