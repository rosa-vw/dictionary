import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

function Dictionary() {
  let [word, setWord] = useState("");

  function handleResponse(response) {
    //console.log(response.data);
    alert(response.data.phonetic);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${word}`);

    let apiKey = `f8eo81d182023fdd4fb805t37b75950a`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleWordChange(event) {
    setWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          onChange={handleWordChange}
          placeholder="Search for a word..."
        />
      </form>
    </div>
  );
}

export default Dictionary;
