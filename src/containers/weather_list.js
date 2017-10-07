import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    renderWeather(cityData, i) {
        const temps = cityData.forecast.forecastday[0].hour.map(weather => weather.temp_c);
        const pressures = cityData.forecast.forecastday[0].hour.map(weather => weather.pressure_mb);
        const humidities = cityData.forecast.forecastday[0].hour.map(weather => weather.humidity);

        const lat = cityData.location.lat;
        const lon = cityData.location.lon;

        return (
            <tr key={i}>
                <td><GoogleMap lon={lon} lat={lat}/></td>
                <td><Chart data={temps} color={'red'} units="C"/></td>
                <td><Chart data={pressures} color={'orange'} units="hPa"/></td>
                <td><Chart data={humidities} color={'blue'} units="%"/></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (C)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th>
                </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}) {
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);