import React, { Component } from 'react';
import {NavLink, Route, Switch} from 'react-router-dom';
import { withTranslation } from 'react-i18next';

import HomePage from "../pages/home-page";
import FirstPage from "../pages/first";
import SecondPage from "../pages/second";
import PageNotFound from '../pages/page-not-found';

import styles from './index.scss';

class Layout extends Component<any> {
  changeLanguage (language: string) {
    return () => {
      this.props.i18n.changeLanguage(language);
    }
  }

  render() {
    const { path } = this.props.match;

    return (
      <main className={styles['layout-container']}>
        <header className={styles['layout-header']}>
          <menu>
            <ul className={styles['navigation']}>
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
          <div>
            <div>Change language:</div>
            <button className={styles['button']} onClick={this.changeLanguage('en')}>EN</button>
            <button className={styles['button']} onClick={this.changeLanguage('uk')}>UK</button>
          </div>
        </header>
        <div className={styles['layout-body']}>
          <Switch>
            <Route exact={true} path={`${path}`} component={HomePage} />
            <Route exact={true} path={`${path}:lng(en|uk)?`} component={HomePage} />
            <Route path={`${path}:lng(en|uk)?/first`} component={FirstPage} />
            <Route path={`${path}:lng(en|uk)?/second`} component={SecondPage} />
            <Route path={`${path}`} component={PageNotFound} />
          </Switch>
        </div>
      </main>
    );
  }
}

export default withTranslation()(Layout);
