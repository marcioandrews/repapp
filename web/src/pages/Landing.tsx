import '../styles/Global.css';
import '../styles/Variables.css';
import '../styles/pages/Landing.css';
import logoImg from '../assets/logo.svg';
import { Link } from 'react-router-dom'

function Landing() {
  // const body = document.dark-mode.body
  document.body.classList.add("light")
    return (
        <div id="page-landing">
        <div className="content-wrapper">
          <main>
            <img src={logoImg} alt="Repapp" />
            <h1>O Repapp ajuda os times a agilizar o trabalho.</h1>
            <p>Colabore, gerencie projetos e alcance novos picos de produtividade. Seja em um arranha-céu ou em’ home office, o jeito de trabalhar do seu time é único, e o Trello pode ajudar você a produzir cada vez mais.</p>
            <Link to="/">
              Link
            </Link>
          </main>
        </div>
      </div>
    )
}
export default Landing;