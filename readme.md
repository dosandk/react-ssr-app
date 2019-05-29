## To start application 

1. install node & npm
2. install Docker
3. Run `npm install` in project root
4. `docker run --name docker-nginx -p 3000:80 -v $(pwd)/dist/public:/usr/share/nginx/html -v $(pwd)/default.conf:/etc/nginx/conf.d/default.conf -d nginx`

### Start application in "production" mode

Run next commands in project root: 
 
* `npm run build`
* `node dist/server.js`

Application will be started on "localhost:3000"

### Start application in "development" mode

Run next commands in project root:

* `npm run develop:ssr`
* `npm run start:server`

Application will be started on "localhost:3000"

## For DevOps

### Build application.

To build an application run `npm run build` as a result you will receive a 
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
