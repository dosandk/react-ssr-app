// import register from 'ignore-styles';
// register(['.sass', '.scss']);

import React from 'react';
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import fs from 'fs';
import path from 'path';

import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import Routes from './src/routes';

const port = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(morgan('dev'));

app.use(
  express.static('dist/public')
);

app.get('/*', (req, res) => {
  fs.readFile(path.resolve('./dist/public/index.html'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);

      return res.status(500).send('An error occurred')
    }

    const context = {};
    const content = renderToString(
      <StaticRouter location={req.url} context={context}>
        <Routes />
      </StaticRouter>
    );

    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${content}</div>`
      )
    );
  })
});

app.listen(port, error => {
  if (error) {
    console.error(`Error: ${error}`);
  }

  console.log(`Server listening on port ${port}`);
});
