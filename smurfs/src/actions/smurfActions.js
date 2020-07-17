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
