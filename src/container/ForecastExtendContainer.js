import React, { Component } from "react";
import PropTypes from "prop-types";
import ForecastExtended from "./../components/ForecastExtended";
import { connect } from "react-redux";
import { getForecastDataFromCities, getCity } from "./../reducers";

class ForecastExtendContainer extends Component{
    render(){
        const { city, forecastData } = this.props;
        return(
            city && 
            <ForecastExtended city={city} forecastData={forecastData}></ForecastExtended>
        )
    }
}

ForecastExtendContainer.protoTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array
}
const mapStateToProps = state => ({city: getCity(state), forecastData: getForecastDataFromCities(state) })
export default connect(mapStateToProps, null)(ForecastExtendContainer);