import React, { Component } from "react";
import "./Input.css";

class Input extends Component {
  render() {
    return (
      <>
        <input
          name={this.props.name}
          type="text"
          value={this.props.value}
          onChange={this.props.onChange}
          style={{
            visibility:
              `${this.props.visibility}` === "false" ? "visible" : "hidden",
          }}
        />
      </>
    );
  }
}

export default Input;
