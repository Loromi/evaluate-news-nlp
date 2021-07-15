import { checkForName } from './nameChecker'

// check what text was put into the form field
// let formText = document.querySelector('#textInput').value
// checkForName(formText)

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

/* funtion to post user input to server */
const postAppData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        // Body data type must match "Content-Type" header        
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log("error", error);
    }
};

// update UI with new entry
const updateUI = (newData) => {

    document.querySelector('#agreement').innerHTML = "Agreement: " + newData.agreement.toLowerCase();
    document.querySelector('#confidence').innerHTML = "Confidence: " + newData.confidence + "%";
    document.querySelector('#irony').innerHTML = "Irony: " + newData.irony.toLowerCase();
    document.querySelector('#subjectivity').innerHTML = "Subjectivity: " + newData.subjectivity.toLowerCase();
    document.querySelector('#score__tag').innerHTML = "Sentiment: " + newData.score_tag;
};

console.log("::: Form Submitted :::")

// fetch('http://localhost:8080/test')
//     .then(res => res.json())
//     .then(function (res) {
//         document.getElementById('results').innerHTML = res.message
//     });

export { handleSubmit }
