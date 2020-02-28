import { connect } from "react-redux";
import Alert from "./alert";
const mapStateToProps = state => {
  return {
    msg: state.alert.message,
    cssClass: state.alert.cssClass
  };
};
export default connect(mapStateToProps)(Alert);
