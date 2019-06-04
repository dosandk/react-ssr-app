# Tech stack:

## Libraries:
* [React](https://reactjs.org/) is a JavaScript library for building user interfaces
* [React-i18next](https://react.i18next.com/) is a powerful internationalization framework for reactjs / reactnative which is based on i18next.
* [React-router-dom](https://github.com/ReactTraining/react-router) - React Router id declarative routing for React
* [React-helmet](https://github.com/nfl/react-helmet) is a document head manager for React
* [Express](https://expressjs.com/) fast, unopinionated, minimalist web framework for Node.js
* [SCSS](https://sass-lang.com/) - CSS with superpowers

## Build system
* [Webpack](https://webpack.js.org/) - module bundler

## Technologies:
* [TypeScript](https://www.typescriptlang.org/) - is a typed superset of Javascript
* [CSS Modules](https://github.com/css-modules/css-modules) A CSS Module is a CSS file in which all class names and animation names are scoped locally by default
* [Nodejs](https://nodejs.org) Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
* [ServiceWorker](https://w3c.github.io/ServiceWorker/) - is a technology for offline support and other cool stuff


## To start application 

1. install node & npm
2. install Docker
3. Run `npm install` in project root
4. `docker run --name docker-nginx -p 3000:80 -v $(pwd)/dist/public:/usr/share/nginx/html -v $(pwd)/default.conf:/etc/nginx/conf.d/default.conf -d nginx`

### Start application in "production" mode

Run next commands in project root: 
 
* `npm run build:prod`
* `npm run start:prod`

Application will be started on "localhost:3000"

### Start application in "development" mode

Run next commands in project root:

* `npm run build:dev`
* `npm run start:prod`

Application will be started on "localhost:3000"

## For DevOps

### Build application.

To build an application run `npm run build:prod` as a result you will receive a 
next structure in project root:

```
├── dist
|   ├── index.html
|   ├── server.js
|   └── public
|       ├── vendors~main.bundle.js
|       ├── vendors~main.bundle.js.LICENSE
|       ├── main.bundle.js
|       ├── main.css
|       ├── robots.txt
|       ├── sitemap.xml
|       └── images
|           ├── some-img-1.png
|           ├── ...
|           └── some-img-n.png
```

### Start Node server

To start nodejs server please use a next command in project root directory 
`node dist/server.js`

Nodejs server will serve all static files form "dist/public" directory

### Commands for pipelines

### Nodejs & npm required versions

```json
{
  "engines": {
    "node": ">=10.0.0",
    "npm": ">=6.0.0"
  }
}
```

## Docker commands:

Create container:

`
    docker run --name docker-nginx -p 3000:80 -v $(pwd)/dist/public:/usr/share/nginx/html -v $(pwd)/default.conf:/etc/nginx/conf.d/default.conf -d nginx
`

Install curl inside container:

`
    docker exec -i -t <container name> /bin/bash
    apt-get update; apt-get install curl
`
