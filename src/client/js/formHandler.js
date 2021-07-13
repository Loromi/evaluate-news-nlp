import { checkForName } from './nameChecker'

function handleSubmit(event) {
    event.preventDefault()

    appData = document.querySelector('textInput').value;

    postAppData('http://localhost:8080/addDataAPI', { textUser: appData })
        .then(() => fetch("http://localhost:8080/return_data"))
        .then(res => res.json())
        .then(data => {
            console.log('data received from localhost:8080')
            console.log(data)
        })
};

/* funtion to post user input to server  */
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
}

// check what text was put into the form field
let formText = document.getElementById('name').value
checkForName(formText)

console.log("::: Form Submitted :::")
fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(function (res) {
        document.getElementById('results').innerHTML = res.message
    });

export { handleSubmit }
