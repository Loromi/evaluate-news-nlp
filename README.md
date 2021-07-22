# Evaluate a news article with natural-language-processing

This project was made as part of Udacity's Front End Web Development nanodegree using following technologies:
- Node.js and NPM (https://nodejs.org/en/ & https://www.npmjs.com/)
- Express Server (https://expressjs.com/)
- Webpack (https://webpack.js.org/)
- Sass styles (https://sass-lang.com/)
- Webpack Loaders and Plugins
- Service workers
- The MeaingCloud Sentiment-Analysis API (https://www.meaningcloud.com/developer/sentiment-analysis)


## Short explanation of NLP
(from: https://en.wikipedia.org/wiki/Natural_language_processing)

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
process and analyze large amounts of natural language data.


## Getting started

### Install Node environment 
`cd` into your new folder and run:
- `npm install`

### Signup for an API key
Signing up here creates an API Key for MeaningCloud:
https://www.meaningcloud.com/developer/login

### Environment Variables
- [ ] Create a new ```.env``` file in the root of your project
- [ ] Go to your .gitignore file and add ```.env``` - this will make sure that we don't push our environment variables to Github! If you forget this step, all of the work we did to protect our API key was pointless.
- [ ] Fill the .env file with your API key like this:
```
API_KEY=**************************
```


## bash commands 

- setup development environment:
```
$ npm run build-dev
```
- setup production environment:
```
$ npm run build-prod
```
- start the app on 'localhost:8080':
```
$ npm start
```
- run all jest tests:
```
$ npm test
```