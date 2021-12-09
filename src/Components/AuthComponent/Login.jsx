import React from 'react'
import Loginform from './Loginform';
import Logo from "../../Pages/HeaderComponent/Logo";
import "./auth.css";

const Login = () => {
    return (
      <section id="authBlock">
        <article>
          <Logo />
          <div className="authContent">
            <h1>To continue, log in to Spotify.</h1>
            <div>
              <button className="btn">
                            <span> <i class="fab fa-facebook-f" style={{padding:"5px", background:"transparent"}}></i>
                            Sign up with FaceBook</span>
              </button>
              <button className="btn2">CONTINUE WITH APPLE</button>
              <button className="btn3">CONTINUE WITH GOOGLE</button>
              <button className="btn3">CONTINUE WITH PHONE NUMBER</button>
            </div>
            <p className="orBlock">
              <strong>or</strong>
            </p>
          </div>
          <div className="formContent">
            <Loginform />
          </div>
        </article>
      </section>
    );
}

export default Login
