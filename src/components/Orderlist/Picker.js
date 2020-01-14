import React, { Component } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default class Picker extends Component {
  state = {
    date: new Date(),
    showDate: false
  };

  onChange = date => {
    this.setState({
      date
    });
  };

  validation = () => {
    this.setState({
      showDate: true
    });
    console.log(this.state.date);
  };

  render() {
    return (
      <div style={{ boxShadow: "4px 4px 20px" }}>
        <Calendar
        // onChange={this.onChange}
        // selectRange={true}
        // value={this.state.value}
        />
      </div>
    );
  }
}
