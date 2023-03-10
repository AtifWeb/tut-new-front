import React from "react";
import "../../../assets/css/New/login.css";
import login_bg from "../../../assets/img/New/login_bg.webp";
function LoginNew() {
  return (
    <div className="LoginNewWrapper onboarding-page">
      <div
        className="content-wrapper js-content-wrapper"
        style={{ display: "contents" }}
      >
        <div className="modals-container" style={{ display: "contents" }}>
          <div
            className="modal gr-auth squished"
            style={{ display: "contents" }}
          >
            <main className="login-form">
              <header className="header">
                <a
                  className="wordmark logo-full"
                  href="https://gumroad.com/"
                ></a>
                <div className="actions">
                  <a href="https://app.gumroad.com/signup?next=https%3A%2F%2Fgumroad.com%2F">
                    Sign up
                  </a>
                </div>
                <h1>Welcome back.</h1>
              </header>
              <div className="input-group">
                <form
                  className="row stacked formtastic user"
                  id="login-form"
                  autocomplete="off"
                  novalidate="novalidate"
                  accept-charset="UTF-8"
                  method="post"
                >
                  <section className="row classic-auth js-classic-auth">
                    <fieldset>
                      <legend>
                        <label className="top-level-label">Email</label>
                        <a
                          className="legacy-only pull-right"
                          href="https://app.gumroad.com/signup?next=https%3A%2F%2Fgumroad.com%2F"
                        >
                          Looking to create an account?
                        </a>
                      </legend>
                      <input
                        className="required top-level-input"
                        tabindex="1"
                        type="email"
                        name="user[login_identifier]"
                      />
                    </fieldset>
                    <fieldset>
                      <legend>
                        <label className="top-level-label">Password</label>
                        <a
                          className="pull-right js-show-forgot-password-form-trigger"
                          href="https://app.gumroad.com/login#"
                        >
                          Forgot your password?
                        </a>
                      </legend>
                      <input
                        className="password required top-level-input"
                        tabindex="2"
                        type="password"
                        name="user[password]"
                      />
                    </fieldset>
                    <button className="button-primary button-block button-full-width primary js-login-button">
                      Login
                    </button>
                    <div
                      className="js-recaptcha"
                      data-sitekey="6LfD8OcaAAAAAPeGM03M5l8k1UXcAblGS0vS9uVU"
                      id="loginRecaptcha"
                    ></div>
                  </section>
                </form>
              </div>
            </main>
          </div>
          <aside className="avatars-container">
            <img src={login_bg} />
          </aside>
        </div>
      </div>
    </div>
  );
}

export default LoginNew;
