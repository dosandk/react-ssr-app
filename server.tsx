import React from 'react';
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';

import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import Routes from './src/routes';

const port = process.env.PORT || 3001;
const app = express();
// const router = express.Router();

app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(morgan('dev'));

app.use(
  express.static('dist/public')
);

app.get('/*', (req, res) => {
  const context = {};
  const content = renderToString(
    <StaticRouter location={req.url} context={context}>
      <Routes />
    </StaticRouter>
  );

  console.error('content', content);

  const html = `
    <html lang="en">
      <head></head>
      <body>
        <div id="root" class="root">
          ${content}
        </div>
        <script src="main.bundle.js"></script>
        <script src="vendors~main.bundle.js"></script>
      </body>
    </html>
  `;

  res.send(html);
});

app.listen(port, error => {
  if (error) {
    console.error(`Error: ${error}`);
  }

  console.log(`Server listening on port ${port}`);
});
