// import React, { Component } from "react";
import "./Message.css";

// class Message extends Component {
//   state = { width: "100%" };
//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({
//         width: 0,
//       });
//     }, 2000);
//   }
//   render() {
//     return (
//       <div className="overlay" style={{ width: `${this.state.width}` }}>
//         <div className="overlay-content">
//           <h1>{this.props.text}</h1>
//         </div>
//       </div>
//     );
//   }
// }

// export default Message;

import React, { useState, useEffect } from "react";

export default function Message(props) {
  const [width, setWidth] = useState("100%");
  useEffect(() => {
    setTimeout(() => {
      setWidth("0");
    }, 2000);
  }, []);
  return (
    <div className="overlay" style={{ width: `${width}` }}>
      <div className="overlay-content">
        <h1>{props.text}</h1>
      </div>
    </div>
  );
}
