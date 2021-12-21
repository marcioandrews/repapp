import '../styles/Global.css';
import '../styles/Variables.css';
import '../styles/pages/Login.css';
import Navbar from '../components/navbar/Navbar';
import { useAuth } from '../context/AuthProvider/useAuth';
import { useHistory } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Logged } from '../context/AuthProvider/util'
import { AuthContext } from '../context/AuthProvider';
import LoginImage from '../assets/login.svg'

const Login = () => {

  async function CheckLogged() {
    const response = await Logged()
    console.log(response)
    if (response) {
      history.replace('/profile');
    }
  };
  CheckLogged();
  let history = useHistory();
  const auth = useAuth();

  const [login, setLogin] = useState('')
  const [password, setPassWord] = useState('')

  async function onFinish(login: string, password: string) {
    try {
      await auth.authenticate(login, password);
    }
    catch (error) {

    }
    history.replace('/profile');

  }
  return (

    <div id="page-login">
      <Navbar />
      <main>
        <div className="main-content">
          <section className="header-1 section-rotate bg-section-secondary" >
            <div className="section-inner bg-gradient-primary"></div>
            <div className="container">
              <div className="section-login">
              <h1>Login</h1>
              <label>
                login:
                <br />
                <input type="text" name="name" placeholder="Username ou e-mail." onChange={(e) => setLogin(e.target.value)} />
              </label>
              <br />
              <label>
                senha:
                <br />
                <input type="password" name="password" placeholder="******" security="password" onChange={(e) => setPassWord(e.target.value)} />
              </label>
              <br />
              <input className="button" type="submit" value="ENTRAR" onClick={() => onFinish(login, password)} />
              <br />
              {/* <input className="button" type="submit" value="logout" onClick={() => userContext.logout()} /> */}
              </div>
            </div>
          </section>
        <img className="login" src={LoginImage} alt="Login Image" />
        </div>
      </main>
    </div>

  )
}
export default Login;
