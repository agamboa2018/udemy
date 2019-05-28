import React, { Component} from "react";
import PropTypes from "prop-types";
import LocationList from './../components/LocationList';
import { connect } from "react-redux";
import { setSelectedCity, setWeather } from "./../actions"

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
          <LocationList cities={this.props.cities} onSelectedLocation={this.handleSelectedLocation}></LocationList>
        </div>
      );
    }
}

LocationsListContainer.propTypes = {
  setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired
}
  const mapDispatchToPropsActions = dispatch => (
    {
      setCity: value => dispatch(setSelectedCity(value)),
      setWeather: cities => dispatch(setWeather(cities))
    }
  );
const locationConnect = connect(null, mapDispatchToPropsActions)(LocationsListContainer);

export default locationConnect;