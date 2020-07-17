import React, { useState } from "react";

const SmurfForm = (props) => {
  console.log("SMURF FORM PROPS:", props);

  const [name, setName] = useState(props.props.smurfs.name);
  const [age, setAge] = useState(props.props.smurfs.age);
  const [height, setHeight] = useState(props.props.smurfs.height);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.props.postSmurfs({
      name: name,
      age: age,
      height: height,
    });
  };

  const handleNameChanges = (event) => {
    setName(event.target.value);
  };

  const handleAgeChanges = (event) => {
    setAge(event.target.value);
  };

  const handleHeightChanges = (event) => {
    setHeight(event.target.value);
  };

  return (
    <div className="SmurfForm">
      <form>
        <input
          type="text"
          value={name}
          placeholder="name"
          onChange={handleNameChanges}
        />
        <br />
        <input
          type="text"
          value={age}
          placeholder="age"
          onChange={handleAgeChanges}
        />{" "}
        <br />
        <input
          type="text"
          value={height}
          placeholder="height"
          onChange={handleHeightChanges}
        />{" "}
        <br />
        <button type="submit" onClick={handleSubmit}>
          ADD SMURF
        </button>
      </form>
    </div>
  );
};

export default SmurfForm;
