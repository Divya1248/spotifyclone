import React, { useState } from "react";
import { toast } from "react-toastify";
import firebase from "../../firebase";
import { useHistory } from "react-router-dom";

const PhoneAuth = () => {
  let history = useHistory();
  let [state, setstate] = useState({
    phone: "",
    loading: false,
  });
  let { phone, loading } = state;
  let handleChange = e => {
    let { name, value } = e.target;
    setstate({ ...state, [name]: value });
  };
  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setstate({ loading: true });
      let recaptchaContainer = new firebase.auth.RecaptchaVerifier(
        "recaptcha-container"
      );
      let ConfirmationMessage = await firebase
        .auth()
        .signInWithPhoneNumber(phone, recaptchaContainer);
      let code = window.prompt("enter otp");
      ConfirmationMessage.confirm(code);
      toast.success("successfully logged in");
      history.push("/userHome/profile");
    } catch (error) {
      toast.error(error.message);
    }
    setstate({ loading: false, phone: "" });
  };

  return (
    <section id="authBlock">
      <article>
        <div className="authContent">
          <h1> Enter Phone Number.</h1>
          <p style={{ fontSize: "14px", paddingBottom: "20px" }}>
            Enter your spotify username, or the email address that you used to
            <br />
            register. we'll send you email with your username and a link to
            reset your password.
          </p>
        </div>
        <div className="formContent">
          <div className="addform">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlfor="phone">Enter your Phone number</label>
                <input
                  type="text"
                  placeholder="Phone number"
                  name="phone"
                  value={phone}
                  required
                  onChange={handleChange}
                />
              </div>
              <div id="recaptcha-container"></div>
              <div className="form-group btn-group">
                <button>{loading ? "sending" : "send"}</button>
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

export default PhoneAuth;
