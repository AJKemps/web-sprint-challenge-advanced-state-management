const initialState = {
  isFetching: false,
  initialLoad: true,
  smurfs: [{ name: "", age: "", height: "", id: new Date() }],
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_SMURF_START":
      console.log("FETCHING SMURF START REACHED");
      return {
        ...state,
        initialLoad: false,
      };

    case "FETCHING_SMURF_SUCCESS":
      console.log("FETCHING SMURF SUCCESS REACHED");
      return {
        ...state,
        smurfs: action.payload.map((smurf) => ({
          name: smurf.name,
          age: smurf.age,
          height: smurf.height,
          id: new Date(),
        })),
      };

    case "POST_SMURF":
      console.log("POST_SMURF PAYLOAD:", action.payload);
      return state;
    default:
      return state;
  }
};
