import React, { Component } from 'react';
import {withTranslation} from "react-i18next";
import {Route} from 'react-router-dom';

import Layout from './layout';

export class Routes extends Component {
  static root = '/';

  render() {
    return (
      <Route path={`${Routes.root}`} component={Layout} />
    );
  }
}

export default withTranslation()(Routes);
