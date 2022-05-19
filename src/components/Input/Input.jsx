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
            width: `${this.props.width}` === "extra" ? 200 : "",
          }}
        />
      </>
    );
  }
}

export default Input;
