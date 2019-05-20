import React, { Component } from 'react';
import {NavLink, Route, Switch} from 'react-router-dom';
import { withTranslation } from 'react-i18next';

import HomePage from "../pages/home-page";
import FirstPage from "../pages/first";
import SecondPage from "../pages/second";
// import PageNotFound from '../pages/page-not-found';

// import styles from './index.scss';

class Layout extends Component<any> {
  render() {
    const { path } = this.props.match;

    return (
      <main>
        <header>
          <menu>
            <ul>
              <li>
                <NavLink to={'/'}>Home</NavLink>
              </li>
              <li>
                <NavLink to={'/first'}>First</NavLink>
              </li>
              <li>
                <NavLink to={'/second'}>Second</NavLink>
              </li>
            </ul>
          </menu>
        </header>
        <Switch>
          <Route exact={true} path={`${path}`} component={HomePage} />
          <Route path={`${path}first`} component={FirstPage} />
          <Route path={`${path}second`} component={SecondPage} />
          {/*<Route path={`${path}`} component={PageNotFound} />*/}
        </Switch>
      </main>
    );
  }
}

export default withTranslation()(Layout);
