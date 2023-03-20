import React from "react";
import { Link, useParams } from "react-router-dom";
import "../../../assets/css/New/login.css";
import login_bg from "../../../assets/img/New/login_bg.webp";
function RegisterNewTutor() {
  const { type } = useParams();
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
                  <Link to="/LoginNew">Sign in</Link>
                </div>
                <h1>Register Now</h1>
              </header>
              <div className="input-group" style={{ paddingTop: 0 }}>
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
                        <label className="top-level-label">First Name</label>
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
                        <label className="top-level-label">Last Name</label>
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
                        <label className="top-level-label">Email</label>
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
                        <label className="top-level-label">
                          Session Description
                        </label>
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
                        <label className="top-level-label">Price</label>
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
                        <label className="top-level-label">
                          Education From
                        </label>
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
                        <label className="top-level-label">Status</label>
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
                        <label className="top-level-label">Description</label>
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
                        <label className="top-level-label">University</label>
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
                        <label className="top-level-label">
                          University Email
                        </label>
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
                        <label className="top-level-label">
                          Create a Password
                        </label>
                      </legend>
                      <input
                        className="password required top-level-input"
                        tabindex="2"
                        type="password"
                        name="user[password]"
                      />
                    </fieldset>

                    <fieldset>
                      <legend>
                        <label className="top-level-label">Phone Number</label>
                      </legend>
                      <input
                        className="password required top-level-input"
                        tabindex="2"
                        type="password"
                        name="user[password]"
                      />
                    </fieldset>

                    <button className="button-primary button-block button-full-width primary js-login-button">
                      Register
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

export default RegisterNewTutor;
