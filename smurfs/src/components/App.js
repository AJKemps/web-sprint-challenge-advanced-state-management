import React from "react";
import { connect } from "react-redux";
import { getSmurfs, postSmurfs } from "../actions/smurfActions";
import SmurfCard from "../components/smurfCard";
import SmurfForm from "../components/smurfForm";
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
      <SmurfForm props={props} />
      <SmurfCard props={props} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    smurfs: state.smurfs,
    initialLoad: state.initialLoad,
  };
};

export default connect(mapStateToProps, { getSmurfs, postSmurfs })(App);
