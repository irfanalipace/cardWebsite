const initialState = {
  items: "",
};

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD": {
      return {
        ...state,
        items: action.payload,
      };
    }
    case "REMOVE": {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    }
    default:
      return state;
  }
};

export default testReducer;
