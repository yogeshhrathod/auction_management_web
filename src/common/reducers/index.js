import { combineReducers } from "redux";
import authReducer from "../authRedux/authReducer";
import alert from "../alerts/alertReducer";
export default combineReducers({
  alert,
  authReducer
});
