import React from "react";
import PropTypes from "prop-types";

const WeatherExtraInfo = ({humidity, wind}) =>(
    <div>
        <span>{`${humidity}% - `}</span>
        <span>{`${wind} Viento`}</span>
    </div>
);

WeatherExtraInfo.prototype = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired
}
export default WeatherExtraInfo;