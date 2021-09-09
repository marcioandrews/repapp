import React from 'react';
import './styles/global.css';
import './styles/pages/landing.css';
import logoImg from './images/landing.svg';

function App() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img className={logoImg} alt="Repapp"/>
        <h1>O Repapp ajuda os times a agilizar o trabalho.</h1>

      </div>
    </div>
  );
}

export default App;
