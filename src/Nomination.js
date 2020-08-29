import React from "react";


const Nomination = props => {
  return (
    <div className="nominations">
    <img alt="" src={props.nom.Poster} height={200}></img>
    <span className="resultText">
      <span id="info">
        <div id="title">{props.nom.Title}, {props.nom.Year}</div>
        <div>Starring: {props.nom.Actors}</div>
      </span>
      <button value={props.nom.imdbID} onClick={props.unNominate}>Remove</button>
    </span>
</div>
  );
};
export default Nomination;
