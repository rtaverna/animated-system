import React from "react";


const Nomination = props => {
  return (
    <div className="nominations">
      <div>{props.nom.Title}</div>
      <button value={props.nom.imdbID} onClick={props.unNominate}>Remove</button>
    </div>
  );
};
export default Nomination;
