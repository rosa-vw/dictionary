import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

function Dictionary(props) {
  let [word, setWord] = useState(props.default);
  let [information, setInformation] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);
  let [audio, setAudio] = useState(null);

  function handleResponse(response) {
    if (response.data.status === "not_found") {
      return handleError();
    }
    setInformation(response.data);
  }

  function handlePexels(response) {
    setPhotos(response.data.photos);
  }

  function handleAudio(response) {
    setAudio(response.data);
  }

  function handleError() {
    alert("Sorry, we can't find that word. Please try something else");
    setWord("error");
    setInformation(null);
    setPhotos(null);
    setAudio(null);
  }

  function search() {
    let apiKey = `f8eo81d182023fdd4fb805t37b75950a`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse).catch(handleError);

    let audioUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(audioUrl).then(handleAudio).catch(handleError);

    let pexelsKey = `e7fAJouPDoVBu9E1nBsxzWT5GxtgfRywB0Ou6ASX0QHiUpVAvhCQeCVd`;
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=4`;
    axios
      .get(pexelsUrl, { headers: { Authorization: `${pexelsKey}` } })
      .then(handlePexels)
      .catch(handleError);
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

        <Results result={information} audio={audio} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}

export default Dictionary;
