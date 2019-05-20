import * as React from 'react';
import { render } from 'react-dom';

import App from './app';

const renderApp = () => {
  const appContainer = document.getElementById('root');

  render(<App />, appContainer);
};

renderApp();
