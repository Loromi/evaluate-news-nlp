import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import './styles/results.scss'

fetch('http://localhost:8080/return_data', {
    method: "POST",
    mode: "cors",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify()
}).then(res => res.json())
    .then(data => {
        console.log(data)
    });

export {
    checkForName,
    handleSubmit
}
