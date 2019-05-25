import React, { Component } from 'react';
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import LocationListContainer from "./container/LocationListContainer";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import {Grid, Row, Col} from "react-flexbox-grid";
import "./App.css";
import ForecastExtendContainer from "./container/ForecastExtendContainer";

const cities =[
  "Buenos Aires, ar",
  "Madrid, es",
  "Miami, eeuu",
  "Maracay, ve"
]

class App extends Component {

    render() {
    return (
      <Grid>
        <Row>
          <AppBar position="sticky">
            <Toolbar>
              <Typography variant="title" color="inherit">Weather App</Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationListContainer cities={cities}></LocationListContainer>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">
                <ForecastExtendContainer></ForecastExtendContainer>
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}
export default App;