import { albumData } from "../../Store/data/albumData";

const initialState = {
  Images: albumData,
  editData: {},
  update: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_IMAGE": {
      let imageData = state.Images;
      action.data.id = Math.floor(Math.ramdom() * 100000) + 1;
      imageData.push(action.data);
      return {
        ...state,
        Images: imageData,
        update: false
      };
    }
    case "DELETE": {
      let data = state.Images;
      let filtereddata = data.filter(items => items.name !== action.data.name);
      return {
        ...state,
        Images: filtereddata,
        update: false
      };
    }
    case "EDIT": {
      return {
        ...state,
        editData: action.data,
        update: true
      };
    }
    case "COUNT": {
      let updatedData = state.Images.map(imgd =>
        imgd.id === action.data.id ? { ...imgd, like: imgd.like + 1 } : imgd
      );

      return {
        ...state,
        Images: updatedData
      };
    }
    default:
      return state;
  }
};
