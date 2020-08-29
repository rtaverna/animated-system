
import React from "react";


const Nomination = props => {
  const imdbLink = "https://www.imdb.com/title/:imdbID"
  const imdbID = props.result.imdbID
  return (
    <div className="result">
        <img alt="" src={props.result.Poster} opacity={1} height={200}></img>
        <span className="resultText">
          <span id="info">
            <div id="title">{props.result.Title}, {props.result.Year}</div>
            <div>Starring: {props.result.Actors}</div>
            <div>
              <a href={imdbLink.replace(':imdbID', imdbID)}>More info on IMDB</a>
            </div>
          </span>
          <div>{props.nominations.every(nom => nom.Title !== props.result.Title) ? <button onClick={props.nominate}>Nominate</button> : null}</div>
        </span>
    </div>
  );
};
export default Nomination;
