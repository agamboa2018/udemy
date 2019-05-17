import React, {Component} from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import transformWeather from "./../../services/transformWeather";
import {api_weather} from "./../../constants/api_url";
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

class WeatherLocation extends Component{

    constructor(){
        super();
        this.state = {
            city: "Buenos Aires",
            data: null
        }
        console.log("constructor");
    }

    componentDidMount(){
        console.log("componentDidMount");
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate");
    }

    handleUpdateClick = () => {
        fetch(api_weather).then(resolve =>{
            return resolve.json();
        }).then(data =>{
            const newWeather = transformWeather(data);
            console.log(data);
            this.setState({
                data : newWeather
            })
        });
    }
    render(){
        const {city, data} = this.state;
        console.log("render");
        return(
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                {data ? <WeatherData data={data}></WeatherData> : <CircularProgress size={50}></CircularProgress>}
            </div>
        )
    }
}

export default WeatherLocation;