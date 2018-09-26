import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchData } from "./actions/weatherStation";

import WeatherForecast from './components/WeatherForecast';

@connect(store => {  
  return {
    forecast: store.weatherStation.data
  }
})
export default class App extends Component {


  componentDidMount() {  

  }

  render() {
    const { forecast } = this.props;

    return (
        <div>
          <WeatherForecast data={forecast} />
        </div>
    );
  }
}