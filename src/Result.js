
import React from "react";


const Nomination = props => {
  return (
    <div className="result">
        <div>{props.result.Title}, {props.result.Year}</div>
        {props.nominations.includes(props.result) ? null : <button onClick={props.nominate}>Nominate</button>}
    </div>
  );
};
export default Nomination;
