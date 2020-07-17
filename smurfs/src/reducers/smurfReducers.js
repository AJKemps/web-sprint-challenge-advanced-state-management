const initialState = {
  isFetching: false,
  smurfs: [{ name: "Alex", age: "12", height: "69", id: new Date() }],
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_SMURF_START":
      console.log("FETCHING SMURF START REACHED");
      return state;

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

    default:
      return state;
  }
};
