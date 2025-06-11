import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

function Dictionary(props) {
  let [word, setWord] = useState(props.default);
  let [information, setInformation] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setInformation(response.data);
  }

  function search() {
    let apiKey = `f8eo81d182023fdd4fb805t37b75950a`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function load() {
    setLoaded(true);
    search();
  }

  function handleWordChange(event) {
    setWord(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            onChange={handleWordChange}
            placeholder="Search for a word..."
          />
        </form>
        <Results result={information} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}

export default Dictionary;
