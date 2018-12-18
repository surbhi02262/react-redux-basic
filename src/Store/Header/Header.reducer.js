import { SET_HEADER_TITLE } from "../typeConstants";
const initialState = {
  title: "Home",
  appName: "Photo Album"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_HEADER_TITLE: {
      return {
        ...state,
        title: action.title
      };
    }
    default:
      return {
        ...state
      };
  }
};
