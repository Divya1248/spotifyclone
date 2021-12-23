import React from "react";
import Loginform from "./Loginform";
import { Link } from "react-router-dom";
import Logo from "../../Pages/HeaderComponent/Logo";
import { useHistory } from "react-router-dom";
import "./auth.css";
import { toast } from 'react-toastify';
import SocialLogin, {
GoogleProvider,
  FacebookProvider,
} from "./LoginWithSocialMedia";

const Login = () => {
  let history = useHistory();
  let handleClick = async provider => {
    try {
      await SocialLogin(provider);
      toast.success("successfully logge/d in");
      history.push("/userHome/profile")
    }
    catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <section id="authBlock">
      <article>
        <Logo />
        <div className="authContent">
          <h1>To continue, log in to Spotify.</h1>
          <div>
            <button
              className="btn"
              onClick={() => {
                handleClick(FacebookProvider);
              }}
            >
              <span>
                <i
                  class="fab fa-facebook-f"
                  style={{ padding: "5px", background: "transparent" }}
                ></i>
                Sign up with FaceBook
              </span>
            </button>
            <button className="btn2">CONTINUE WITH APPLE</button>
            <button
              className="btn3"
              onClick={() => {
                handleClick(GoogleProvider);
              }}
            >
              CONTINUE WITH GOOGLE
            </button>
            <button className="btn3">
              <Link to="/phone-auth">CONTINUE WITH PHONE NUMBER</Link>
            </button>
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
};

export default Login;
