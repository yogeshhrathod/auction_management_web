import React from "react";
import { Login, RegisterForm } from "./views/authentication";
import Alert from "./common/alerts/";
import { UserProfile, EditProfile } from "./views/profile/";
import NewAuction from "./views/newAuction/";
import Navbar from "./common/navbar";
import PrivateRouter from "./common/authRedux";
import {
  DisplayAllItems,
  DisplayMyItems,
  MyBiddings,
  SearchResult
} from "./views/displayItems/";
import AuctionDetails from "./views/viewAuction/auctionDetailsHandler";
import { connect } from "react-redux";
import { SessionRouter } from "./common/routers/";
import { BrowserRouter as Router, Switch } from "react-router-dom";
function App(props) {
  // TODO
  // form validations
  return (
    <>
      <Alert />
      <Router>
        <Navbar />
        <Switch>
          <PrivateRouter path="/" exact component={DisplayAllItems} />
          <PrivateRouter path="/my" exact component={DisplayMyItems} />
          <SessionRouter path="/login" exact component={Login} />
          <SessionRouter path="/register" component={RegisterForm} />
          <PrivateRouter path="/edit-profile" component={EditProfile} />
          <PrivateRouter path="/user-profile/" component={UserProfile} />
          <PrivateRouter path="/user/:id" component={UserProfile} />
          <PrivateRouter path="/new-auction" component={NewAuction} />
          <PrivateRouter path="/item/:id" component={AuctionDetails} />
          <PrivateRouter path="/search/:query" component={SearchResult} />
          <PrivateRouter path="/my-biddings" component={MyBiddings} />
        </Switch>
      </Router>
    </>
  );
}
export default connect()(App);
