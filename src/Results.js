import React from "react";
import Meaning from "./Meaning";
import Audio from "./Audio";
import "./Results.css";

function Results(props) {
  if (props.result) {
    return (
      <div className="Results">
        <div className="Title">
          <h2>{props.result.word}</h2>
          <h3>{props.result.phonetic}</h3>
          <Audio audio={props.audio} />
        </div>
        <div className="Meanings">
          {props.result.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Results;
