import axios from "axios";

export const getSmurfs = () => (dispatch) => {
  dispatch({ type: "FETCHING_SMURF_START" });
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      console.log("API RESPONSE:", res.data);
      dispatch({ type: "FETCHING_SMURF_SUCCESS", payload: res.data });
    })
    .catch((error) => {
      console.log("API ERROR:", error);
    });
};

export const postSmurfs = (smurfData) => (dispatch) => {
  dispatch({ type: "POST_SMURF", payload: smurfData });
  axios
    .post("http://localhost:3333/smurfs", {
      name: smurfData.name,
      age: smurfData.age,
      height: smurfData.height,
    })
    .then((res) => {
      console.log("POST REQUEST RESPONSE:", res);
    })

    .catch((err) => {
      console.log("POST REQUEST ERROR:", err);
    });
};
