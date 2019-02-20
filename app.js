

const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();
const db             = require('./app/configuration/db');
const routes         = require('./app/routes');

const port = 8000;


app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err);
     routes(app, database);

    app.listen(port, () => {
      console.log('We are live on ' + port);
    });               
  })

/*
const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();
const db             = require('./app/configuration/db');
const routes         = require('./app/routes');
const port           = 6000; 

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, (err , database) => {
    if (err) return console.log(err);
     routes(app, database)
     app.listen(port, () => {
         console.log('We are Live on ' + port);
     })
    })
*/

/*
const http = require('http');
http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end("Hello World!");
      console.log(`Running`);

}).listen(port);
*/

