const dotenv = require('dotenv');
dotenv.config();
console.log(`Your API key is ${process.env.API_KEY}`);

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');

const app = express();

app.use(express.static('dist'));

console.log(__dirname);

app.get('/', function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile('index.html', { root: 'dist' })
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
});

app.get('/test', function (req, res) {
  res.send(mockAPIResponse)
});

const fetch = require("node-fetch");

// MeaningCloud sentiment-analysis:
// from https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/dev-tools

const FormData = require('form-data');
const fs = require('fs');
const formdata = new FormData();
formdata.append("key", process.env.API_KEY);
formdata.append("txt", "YOUR TEXT HERE");
formdata.append("lang", "en");  // 2-letter code, like en es fr ...

const requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

const response = fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
  .then(response => ({
    status: response.status,
    body: response.json()
  }))
  .then(({ status, body }) => console.log(status, body))
  .catch(error => console.log('error', error));

app.post("/get_data", (req, res) => {
  return formdata;
})