import React from 'react';
import { renderToString } from "react-dom/server";
import {Helmet} from "react-helmet";
import { I18nextProvider } from 'react-i18next';
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { StaticRouter } from 'react-router';
import { missingKeyHandler } from 'i18next-express-middleware';

import Routes from './src/routes';
import i18n from './src/i18n';

const port = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(morgan('dev'));

/*
  NOTE: Static files will be server by Nginx
  Uncomment this block if you want to serve static files via express
*/

app.use(
  express.static(path.resolve(__dirname, 'public'))
);

app.get('/*', (req, res) => {
  fs.readFile(path.resolve(__dirname, 'index.html'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);

      return res.status(500).send('An error occurred')
    }

    // TODO: change to RegExp
    const languagesList = ['en', 'uk'];
    const pathLanguage = req.url.slice(1,3);

    // NOTE: it will switch language to language passed in url and return translated document
    if (languagesList.includes(pathLanguage)) {
      i18n.changeLanguage(pathLanguage);
    }

    const context = {};
    const content = renderToString(
      <StaticRouter location={req.url} context={context}>
        <I18nextProvider i18n={i18n}>
          <Routes />
        </I18nextProvider>
      </StaticRouter>
    );

    const helmet = Helmet.renderStatic();
    const title = helmet.title.toString();
    const meta = helmet.meta.toString();

    const rootRegExp = /<div id=["|']root["|'][^>]*>(.*?)<\/div>/;
    const titleRegExp = /<title[^>]*>(.*?)<\/title>/;
    const headRegExp = /<\/head>/;

    const result = data
      .replace(
        rootRegExp,
        `<div id="root" class="root">${content}</div>`
      )
      .replace(
        titleRegExp,
        `${title}`
      )
      .replace(
        headRegExp,
        `${meta}</head>`
      );

    return res.send(result);
  })
});

app.post('/locales/add/:lng/:ns', missingKeyHandler(i18n));

app.listen(port, error => {
  if (error) {
    console.error(`Error: ${error}`);
  }

  console.log(`Server listening on port ${port}`);
});
