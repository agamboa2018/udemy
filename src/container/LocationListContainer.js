import React, { Component} from "react";
import PropTypes from "prop-types";
import LocationList from './../components/LocationList';
import { connect } from "react-redux";
import { setSelectedCity } from "./../actions"

class LocationsListContainer extends Component{
    handleSelectedLocation = city => {
        this.props.dispatchSetCity(city);
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
    dispatchSetCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired
}
  const mapDispatchToPropsActions = dispatch => (
    {
      dispatchSetCity: value => dispatch(setSelectedCity(value))
    }
  );
const locationConnect = connect(null, mapDispatchToPropsActions)(LocationsListContainer);

export default locationConnect;