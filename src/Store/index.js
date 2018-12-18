import { combineReducers } from "redux";
import header from "./Header/Header.reducer";
import Img from "../Store/AddImage/AddImage.reducer";
import calc from "../Store/ReduxCalc/ReduxCalc.reducer";

let rootReducer = combineReducers({ header, Img, calc });

export default rootReducer;
