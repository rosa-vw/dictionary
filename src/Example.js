import React from "react";

function Example(props) {
  if (props.example) {
    return (
      <div className="Example">
        <em>Example: {props.example}</em>
      </div>
    );
  } else {
    return null;
  }
}

export default Example;
