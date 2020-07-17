import React from "react";

const SmurfCard = (props) => {
  console.log("smurfCard props:", props.props.smurfs);

  return (
    <>
      {props.props.smurfs.map((smurf) => (
        <div>
          <h3>Name: {smurf.name}</h3>
          <p>Age: {smurf.age}</p>
          <p>Height: {smurf.height}</p>
        </div>
      ))}
    </>
  );
};

export default SmurfCard;
