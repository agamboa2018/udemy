import React, { Component } from 'react';
import WeatherLocation from './components/WeatherLocation';
class App extends Component {
  render() {
    return (
      <div className="App">
        Wheather App (Aplicación del Clima)!
        <WeatherLocation />
      </div>
    );
  }
}

export default App;
