import React, { Component } from "react";
import "./tellerAI.css";
import Ball from "../../Assets/ball.svg";

class TellerAI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  render() {
    return (
      <div className="teller">
        <div className="line one" />
      </div>
    );
  }
}

export default TellerAI;
