import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Layout from './layout';

export class Routes extends Component {
  static root = '/';

  render() {
    console.error('props', this.props);

    return (
      <Route path={`${Routes.root}`} component={Layout} />
    );
  }
}

export default Routes;
