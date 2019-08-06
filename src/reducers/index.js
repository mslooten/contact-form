import { combineReducers } from "redux";
import form from "./form.reducer";
import codes from "./codes.reducer";

export default combineReducers({
  form,
  codes
});
