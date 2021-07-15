import { postAppData } from './appData.js';
import { updateUI } from './updateUI.js'

/* 
handle the input form
- get user input and store it in variable 'appData'
- post appData to server
- fetch processed data 
- update UI with results from MeaningCloud Sentiment Analysis API
*/
function handleSubmit(event) {
    event.preventDefault()

    let appData = document.querySelector('#textInput').value;

    postAppData('http://localhost:8080/addDataAPI', { textUser: appData })
        .then(() => fetch("http://localhost:8080/return_data"))
        .then(res => res.json())
        .then(data => {
            console.log('data received from localhost:8080')
            console.log(data)
            updateUI(data)
        })
};

export { handleSubmit }
