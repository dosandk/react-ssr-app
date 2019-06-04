import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import {I18nextProvider} from "react-i18next";
import i18n from "./i18n";
// import { hot } from 'react-hot-loader/root';
// import { setConfig } from 'react-hot-loader';
import initServiceWorker from './init-sw';

import './client.scss';

// setConfig({
//   ignoreSFC: true, // RHL will be __completely__ disabled for SFC
//   pureRender: true // RHL will not change render method
// });

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </I18nextProvider>
  );
};

// const HotApp = hot(App);

const renderMethod = process.env.SSR ? 'hydrate' : 'render';

ReactDom[renderMethod](
  <App/>,
  document.getElementById('root')
);

if (process.env.NODE_ENV !== 'development') {
  initServiceWorker();
}
