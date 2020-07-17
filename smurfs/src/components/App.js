import React from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions/smurfActions";
import SmurfCard from "../components/smurfCard";
import "./App.css";

function App(props) {
  const clickHandler = (event) => {
    event.preventDefault();
    props.getSmurfs();
  };

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <button onClick={clickHandler}>GET SMURFS</button>
      <SmurfCard props={props} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    smurfs: state.smurfs,
  };
};

export default connect(mapStateToProps, { getSmurfs })(App);
