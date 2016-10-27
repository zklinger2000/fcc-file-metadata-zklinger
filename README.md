# fcc-file-metadata-zklinger

![FreeCodeCamp Social Banner](https://s3.amazonaws.com/freecodecamp/wide-social-banner.png)

An API with a POST route for uploading a file and returning a JSON response with the file size.

[https://fcc-file-metadata-zklinger.herokuapp.com/](https://fcc-file-metadata-zklinger.herokuapp.com/)

# API Basejump: File Metadata Microservice
### User stories:
1. I can submit a FormData object that includes a file upload.  
1. When I submit something, I will receive the file size in bytes within the JSON response.

### Example output:
```
{
  "size": "27089"
}
```

Built as a Node.js app using [Express 4](http://expressjs.com/).

This application came from the [Getting Started with Node on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - check it out.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) installed and `mongod` running.

```
$ git clone https://github.com/zklinger2000/fcc-file-metadata-zklinger.git
$ cd fcc-file-metadata-zklinger
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
