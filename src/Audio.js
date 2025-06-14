import React from "react";
import "./Audio.css";
import headphones from "./headphones.png";

function Audio(props) {
  if (props.audio && props.audio[0].phonetics) {
    return (
      <div className="Audio">
        {props.audio[0].phonetics.map(function (audio, index) {
          if (audio.audio && audio.text) {
            return (
              <div className="Listen" key={index}>
                <a href={audio.audio} target="_blank" rel="noreferrer">
                  <img src={headphones} alt="headphones" />
                </a>
                <h4>{audio.text}</h4>
              </div>
            );
          } else {
            return <div key={index}></div>;
          }
        })}
      </div>
    );
  } else {
    return null;
  }
}

export default Audio;
