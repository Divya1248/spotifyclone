import React, { useState } from "react";
import { toast } from "react-toastify";
import firebase from "../../firebase";
import { useHistory } from "react-router-dom";

const PasswordReset = () => {
  let history = useHistory();
  let [state, setstate] = useState({
    loading: false,
    email: "",
  });
  let { loading, email } = state;
  let handleChange = e => {
    let { name, value } = e.target;
    setstate({ ...state, [name]: value });
  };
  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setstate({ loading: true });
      await firebase.auth().sendPasswordResetEmail(email);
      let message = `password reset message has been sent to ${email}address`;
      toast.info(message);
      history.push("/login");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <section id="authBlock">
      <article>
        <div className="authContent">
          <h1>Password Reset.</h1>
          <p style={{ fontSize: "14px", paddingBottom: "20px" }}>
            Enter your spotify username, or the email address that you used to <br/>
            register. we'll send you email with your username and a link to
            reset your password.
          </p>
        </div>
        <div className="formContent">
          <div className="addform">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlfor="password_reset">
                  Email address or username
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group btn-group">
                <button onClick={handleSubmit}>send</button>
              </div>
              <p style={{ textAlign: "center" }}>
                If you still need help, contact spotify support
              </p>
            </form>
          </div>
        </div>
      </article>
    </section>
  );
};

export default PasswordReset;
