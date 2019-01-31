const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
var gplay = require('google-play-scraper');
var store = require('app-store-scraper');

var app = express();

const port = 8080;

app.use(bodyParser.json());


app.post('/play', async (req, res) => {
  appid = req.body.appid

  try {
    let appname = await gplay.app({appId: appid});
    res.status(200).send(appname);
  } catch(e) {
    res.status(400).send('app name doesnt exist');
  };

});

app.post('/app', async (req, res) => {
  appid = req.body.appid

  try {
    let appname = await gplay.app({appId: appid});
    res.status(200).send(appname);
  } catch(e) {
    res.status(400).send('app name doesnt exist');
  };

});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})

module.exports = {app};
