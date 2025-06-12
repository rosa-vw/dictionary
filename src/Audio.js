import React from "react";
import "./Audio.css";
import headphones from "./headphones.png";

function Audio(props) {
  let text = props.audio[0].phonetics[0].text;
  console.log(text);

  if (props.audio[0].phonetics) {
    return (
      <div className="Audio">
        {props.audio[0].phonetics.map(function (audio, index) {
          return (
            <div className="Listen" key={index}>
              <a href={audio.audio} target="_blank" rel="noreferrer">
                <img src={headphones} alt="headphones" />
              </a>
              <h4>{audio.text}</h4>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

export default Audio;
