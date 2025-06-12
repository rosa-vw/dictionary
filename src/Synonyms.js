import React from "react";
import "./Synonyms.css";

function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <ul className="Synonym">
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym} </li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}

export default Synonyms;
