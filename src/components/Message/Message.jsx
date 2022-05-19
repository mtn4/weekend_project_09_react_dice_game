import React, { Component } from "react";
import "./Message.css";

class Message extends Component {
  state = { width: "100%" };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        width: 0,
      });
    }, 2000);
  }
  render() {
    return (
      <div className="overlay" style={{ width: `${this.state.width}` }}>
        <div className="overlay-content">
          <h1>{this.props.text}</h1>
        </div>
      </div>
    );
  }
}

export default Message;
