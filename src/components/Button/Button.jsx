// import React, { Component } from "react";
import "./Button.css";

// class Button extends Component {
//   render() {
//     return (
//       <div>
//         <button
//           name={this.props.name}
//           onClick={this.props.onClick}
//           disabled={this.props.disabled}
//           style={{
//             visibility:
//               `${this.props.visibility}` === "false" ? "hidden" : "visible",
//           }}
//         >
//           {this.props.name}
//         </button>
//       </div>
//     );
//   }
// }

// export default Button;

import React from "react";

export default function Button(props) {
  return (
    <div>
      <button
        name={props.name}
        onClick={props.onClick}
        disabled={props.disabled}
        style={{
          visibility: `${props.visibility}` === "false" ? "hidden" : "visible",
        }}
      >
        {props.name}
      </button>
    </div>
  );
}
