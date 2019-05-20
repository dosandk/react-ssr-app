import React, { Suspense } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { I18nextProvider } from 'react-i18next';
import { hot } from 'react-hot-loader/root';
import { setConfig } from 'react-hot-loader';

import i18n from './i18n';
import Routes from './routes';

import './app.scss';

setConfig({
  ignoreSFC: true, // RHL will be __completely__ disabled for SFC
  pureRender: true // RHL will not change render method
});

const Loader = () => <div>loading...</div>;

const App: React.FC = () => (
  <>
    <I18nextProvider i18n={i18n}>
      <Router history={createBrowserHistory()}>
        <Suspense fallback={<Loader />}>
          <Routes />
        </Suspense>
      </Router>
    </I18nextProvider>
  </>
);

export default hot(App);
