import React from 'react';
import {Route, Switch} from "react-router";
import HomePage from "./pages/home-page";

class AppTest extends React.Component {
  render () {
    return (
      <Switch>
        <Route path={"/"} render={() => {
          return <HomePage />
        }}/>
      </Switch>
    );
  }
}

export default AppTest;
