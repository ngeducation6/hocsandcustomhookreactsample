
import React, { Component } from 'react';

class NASACounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 20
    };
  }

  componentDidMount() {
    const myTimer = setInterval(() => {
      this.state.count > 0
        ? this.setState({ count: this.state.count - 1 })
        : clearInterval(myTimer);
    }, 1000);
  }

  render() {
    return (
      <div style={this.props}>
        <h1>
          NASA Countdown: <br /> {this.state.count || "🪐"} <br />
          {"⭐".repeat(this.state.count) || "🚀"}
        </h1>
        {this.state.count === 0 && <h2>LIFT OFF!!!</h2>}
      </div>
    );
  }
}

export default NASACounter;
