import React, { Component } from 'react';
import './clock.scss';
import moment from 'moment';

// put your code here

const getTimeWithOffset = (offset) => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(
    currentTime.setHours(currentTime.getHours() + offset + utcOffset)
  );
};

class Clock extends Component {
  constructor(props) {
    super(props);
    this.localTime = moment(getTimeWithOffset(props.offset)).format(
      'HH:mm:ss A'
    );
    this.state = {
      time: props.localTime,
    };

    setInterval(() => {
      this.setState({
        time: moment(getTimeWithOffset(props.offset)).format('HH:mm:ss A'),
      });
    }, 1000);
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.props.location}</div>
        <div className="clock__time">{this.state.time}</div>
      </div>
    );
  }
}
// put your code here

export default Clock;
