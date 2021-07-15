const dotenv = require('dotenv');
dotenv.config();

/* URL variables for API call */
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?key=';
const apiKey = process.env.API_KEY
const jsonSelector = "&of=json&txt=";
const lang = "&lang=en";

/* Setup empty JS object to act as endpoint for all routes */
let projectData = {};
/* Setup Array to store user input */
const data = [];

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const app = express();
const bodyParser = require('body-parser')
const fetch = require('node-fetch');

/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
app.use(express.static('dist'));

app.get('/', function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile('index.html', { root: 'dist' })
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
});

// post route for /addDataAPI
app.post('/addDataAPI', (req, res) => {
  console.log('#_____ got request.')
  data.push(req.body);
  console.log(data);
  let newEntry = {
    userInput: req.body.textUser
  }
  getSentimentAPI(baseURL, apiKey, jsonSelector, newEntry.userInput, lang)
    .then(function (data) {
      projectData = data
      res.send(projectData);
    })
});

app.get('/test', function (req, res) {
  res.send(mockAPIResponse)
});

/* Return data to client side */
app.post('/return_data', (req, res) => {
  return { projectData };
})

app.get('/return_data', (req, res) => {
  res.send(projectData)
})



// MeaningCloud sentiment-analysis:
// from https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/dev-tools

// const FormData = require('form-data');
// const fs = require('fs');
// const formdata = new FormData();
// formdata.append("key", process.env.API_KEY);
// formdata.append("txt", "YOUR TEXT HERE");
// formdata.append("lang", "en");  // 2-letter code, like en es fr ...

// const requestOptions = {
//   method: 'POST',
//   body: formdata,
//   redirect: 'follow'
// };

// const response = fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
//   .then(response => ({
//     status: response.status,
//     body: response.json()
//   }))
//   .then(({ status, body }) => console.log(status, body))
//   .catch(error => console.log('error', error));

// app.post("/get_data", (req, res) => {
//   return formdata;
// })

/* Function to call the API */
const getSentimentAPI = async (baseUrl, apiKey, jsonSelector, userInput, lang) => {

  const res = await fetch(baseUrl + apiKey + jsonSelector + userInput + lang)
  try {
    const data = await res.json();
    console.log("Data received from the server: ")
    console.log(data)
    apiJsonResponse = data;
    return data;
  } catch (error) {
    console.log("Error: ", error);
    // appropriately handle the error
  }
}
