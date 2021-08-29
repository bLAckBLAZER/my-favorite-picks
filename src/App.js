import { useState } from "react";
import "./styles.css";

const animeDict = {
  Naruto: "10/10",
  Haikyuu: "9/10",
  Horimiya: "9/10",
  "Rent-a-girlfriend": "10/10",
  "Inazuma Eleven": "9/10"
};
const tvDict = {
  Friends: "10/10",
  "How I Met Your Mother": "9/10",
  "The Office": "7/10"
};
const moviesDict = {
  "Zindagi Na Milegi Dobara": "10/10",
  "Jaane Tu Ya Jaane Na": "9/10",
  Rush: "10/10",
  "National Treasure": "8/10"
};

export default function App() {
  var [outputElement, setOutputElement] = useState([]);

  function onClickAnime() {
    // console.log(Object.entries(animeDict));
    outputElement = [];
    for (let [key, value] of Object.entries(animeDict)) {
      outputElement.push(
        <li key={key}>
          <div className="list-element">
            <p className="item-title">{key}</p>
            <p className="item-score">{value}</p>
          </div>
        </li>
      );
    }
    // console.log(outputElement);
    setOutputElement(outputElement);
  }
  function onClickTv() {
    // console.log(Object.entries(animeDict));
    outputElement = [];
    for (let [key, value] of Object.entries(tvDict)) {
      outputElement.push(
        <li key={key}>
          <div className="list-element">
            <p className="item-title">{key}</p>
            <p className="item-score">{value}</p>
          </div>
        </li>
      );
    }
    // console.log(outputElement);
    setOutputElement(outputElement);
  }
  function onClickMovies() {
    outputElement = [];
    for (let [key, value] of Object.entries(moviesDict)) {
      outputElement.push(
        <li key={key}>
          <div className="list-element">
            <p className="item-title">{key}</p>
            <p className="item-score">{value}</p>
          </div>
        </li>
      );
    }
    // console.log(outputElement);
    setOutputElement(outputElement);
  }

  return (
    <div className="App">
      <h1>🍿 My Picks</h1>
      <p>Here are some of my favourite picks from different categories</p>
      <button onClick={onClickAnime}>Anime</button>
      <button onClick={onClickTv}>TV Series</button>
      <button onClick={onClickMovies}>Movies</button>

      <ul>{outputElement}</ul>
    </div>
  );
}
