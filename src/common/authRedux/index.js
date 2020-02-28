import { connect } from "react-redux";
import PrivateRoute from "../routers/privateRouter";

const mapStateToProps = state => {
  return {
    auth: state.authReducer.auth
  };
};

export default connect(mapStateToProps)(PrivateRoute);
