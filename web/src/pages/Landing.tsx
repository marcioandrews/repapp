import '../styles/Global.css';
import '../styles/Variables.css';
import '../styles/pages/Landing.css';
import Navbar from '../components/navbar/Navbar';
import landingg from '../assets/landing.svg'
import animationRocket from '../assets/lotties/rocket.json';
import Lottie from "react-lottie";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationRocket,
  rendererSettings: {
    // preserveAspectRatio: "xMidYMid slice"
  }
};

function Landing() {
  return (

    <div id="page-landing">
      <Navbar />
      <main>
        <div className="main-content">
          <section className="header-1 section-rotate bg-section-secondary" >
            <div className="section-inner bg-gradient-primary"/>
              
          
            <div className="container">
              <h1>O Repapp ajuda os times a agilizar o trabalho.</h1>
              <div className="rocket" >
              <Lottie options={defaultOptions} height={500} width={500} />
              </div>
            </div>
              <p>Colabore, gerencie projetos e alcance novos picos de produtividade. Seja em um arranha-céu ou em home office, o jeito de trabalhar do seu time é único, e o Trello pode ajudar você a produzir cada vez mais.</p>
          </section>

        </div>
      </main>
    </div>

  )
}
export default Landing;