import axios from 'axios';
const API_KEY = '7531e3da83d2415b20c77cc783d388a9';
const API_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCHE_WEATHER';

export function fetchWeather(city) {
    const url = `${API_URL}&q=${city},us`;
    const request = axios.get(url, {responseType: 'jsonp'});

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}