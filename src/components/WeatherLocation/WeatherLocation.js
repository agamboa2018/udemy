import React, {Component} from "react";
import Location from "./Location";
import WeatherData from "./../WeatherLocation/WeatherData/index";
import "./styles.css";
import {
    FOG,
    RAIN,
    /*FOG,
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY*/
} from "./../../constants/weathers";

const data = {
    temperature: 15,
    weatherState: FOG,
    humidity: 10,
    wind: '10 m/s'
}

const data2 = {
    temperature: 25,
    weatherState: RAIN,
    humidity: 50,
    wind: '20 m/s'
}

class WeatherLocation extends Component{

    constructor(){
        super();
        this.state = {
            city: "Buenos Aires",
            data: data
        }
    }
    handleUpdateClick = () => {
        this.setState({
            city: "Buenos Aires",
            data: data2
        });
    }
    render(){
        const {city, data} = this.state;
        return(
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        )
    }
}

export default WeatherLocation;