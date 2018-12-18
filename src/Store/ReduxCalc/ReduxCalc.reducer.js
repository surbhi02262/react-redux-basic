const initialState = {
  resultdata: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD": {
      return {
        ...state,
        resultdata: action.result
      };
    }
    case "SUBSTRACT": {
      return {
        ...state,
        resultdata: action.result
      };
    }
    case "DIVIDE": {
      return {
        ...state,
        resultdata: action.result
      };
    }
    case "MULTIPLY": {
      return {
        ...state,
        resultdata: action.result
      };
    }
    default:
      return state;
  }
};
