import { handleSubmit } from './js/formHandler'
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import './styles/results.scss'

import gitHubIcon from "./images/github.png";

let gitHub = document.querySelector('#githubIcon');
gitHub.src = gitHubIcon;

export {
    handleSubmit
}
