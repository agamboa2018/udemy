import React, { Component} from "react";
import PropTypes from "prop-types";
import LocationList from './../components/LocationList';
import { connect } from "react-redux";
import { setSelectedCity, setWeather } from "./../actions"
import { getWeatherCities } from "./../reducers"

class LocationsListContainer extends Component{
  componentDidMount(){
    this.props.setWeather(this.props.cities)
  }
    handleSelectedLocation = city => {
      this.props.setCity(city);
    }
    render(){
      return(
        <div>
          <LocationList cities={this.props.citiesWeather} onSelectedLocation={this.handleSelectedLocation}></LocationList>
        </div>
      );
    }
}

LocationsListContainer.propTypes = {
  setCity: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
  citiesWeather: PropTypes.array
}
  const mapDispatchToPropsActions = dispatch => (
    {
      setCity: value => dispatch(setSelectedCity(value)),
      setWeather: cities => dispatch(setWeather(cities))
    }
  );

const mapStateToProps = state => ({ citiesWeather: getWeatherCities(state) });
const locationConnect = connect(mapStateToProps, mapDispatchToPropsActions)(LocationsListContainer);

export default locationConnect;