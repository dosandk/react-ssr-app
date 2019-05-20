import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import AppTest from './app.test';

ReactDom.hydrate(
  <BrowserRouter>
    <AppTest />
  </BrowserRouter>,
  document.getElementById('root')
);

