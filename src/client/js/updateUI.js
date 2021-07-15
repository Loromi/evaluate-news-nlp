/* update UI with new entry */
const updateUI = (newData) => {
    document.querySelector('#agreement').innerHTML = "Agreement: " + newData.agreement.toLowerCase();
    document.querySelector('#confidence').innerHTML = "Confidence: " + newData.confidence + "%";
    document.querySelector('#irony').innerHTML = "Irony: " + newData.irony.toLowerCase();
    document.querySelector('#subjectivity').innerHTML = "Subjectivity: " + newData.subjectivity.toLowerCase();
    document.querySelector('#score__tag').innerHTML = "Sentiment: " + newData.score_tag;
};

export { updateUI }
