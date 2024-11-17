export const set_Loading = "SET_LOADING"; // Action types should be strings
export const set_User = "SET_USER";
export const isLoged = "SET_ISLOGGED";

const Reducer = (state, action) => {
  switch (action.type) {
    case set_Loading:
      return {
        ...state,
        loading: action.payload, 
      };

    case set_User:
      return {
        ...state,
        user: action.payload, 
        loading: false, 
      };

    case isLoged:
      return {
        ...state,
        isloged: !!state.user, 
      };

    default:
      return state; // Return the current state for unhandled actions
  }
};

export default Reducer;
