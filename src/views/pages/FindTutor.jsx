import React from "react";
import Header from "../components/New/Header";
import { Footer } from "../components/New/Footer";
import { ShareWork } from "../components/New/ShareWork";
import SearchIcon from "@material-ui/icons/Search";
function FindTutor() {
  return (
    <div className="FindTutor">
      <Header />

      <div className="hero-container FindTutor">
        <div className="hero-content">
          <div className="left">
            <h1>We can help you find the perfect tutor</h1>
            <p>
              Our team is on standby and ready to help! Our tailored matching
              service is free and easy-to-use, with no obligations.
            </p>
          </div>
          {/* <div className="right">
            <img
              src="https://cdn.mytutor.co.uk/icons/student-laptop-tutor.svg?1619727493000"
              alt=""
            />
          </div> */}
        </div>
      </div>

      <div className="form-area">
        <form>
          <div className="input-container">
            <label htmlFor="">WHAT SUBJECT WOULD YOU LIKE HELP WITH?</label>
            <div className="input-wrapper">
              <input type="text" />
              <SearchIcon />
            </div>
          </div>
          <div className="radio-container">
            <label htmlFor="">WHAT’S YOUR MAIN GOAL?</label>
            <div className="radio-container-content">
              <div className="radio-wrapper">
                <input type="radio" name="goal" id="grade" />
                <label htmlFor="grade">IMPROVE GRADES</label>
              </div>
              <div className="radio-wrapper">
                <input type="radio" name="goal" id="confidence" />
                <label htmlFor="confidence">BOOST CONFIDENCE</label>
              </div>
              <div className="radio-wrapper">
                <input type="radio" name="goal" id="prepare-exam" />
                <label htmlFor="prepare-exam">PREP FOR EXAMS</label>
              </div>
              <div className="radio-wrapper">
                <input type="radio" name="goal" id="student-gap" />
                <label htmlFor="student-gap">FILL IN SUBJECT GAPS</label>
              </div>
            </div>
          </div>

          <div className="radio-container">
            <label htmlFor="">HOW OFTEN WOULD YOU LIKE LESSONS?</label>
            <div className="radio-container-content">
              <div className="radio-wrapper">
                <input type="radio" name="lesson-duration" id="week1" />
                <label htmlFor="week1">ONCE A WEEK</label>
              </div>
              <div className="radio-wrapper">
                <input type="radio" name="lesson-duration" id="week2" />

                <label htmlFor="week2">TWICE A WEEK</label>
              </div>
              <div className="radio-wrapper">
                <input type="radio" name="lesson-duration" id="FORTNIGHTLY" />
                <label htmlFor="FORTNIGHTLY">FORTNIGHTLY</label>
              </div>
              <div className="radio-wrapper">
                <input
                  type="radio"
                  name="lesson-duration"
                  id="lesson-not-sure"
                />
                <label htmlFor="lesson-not-sure">I’LL DECIDE LATER</label>
              </div>
            </div>
          </div>

          <div className="radio-container">
            <label htmlFor="">HOW MUCH WOULD YOU LIKE TO SPEND?</label>
            <div className="radio-container-content">
              <div className="radio-wrapper">
                <input type="radio" name="lesson-price" id="low" />
                <label htmlFor="low">
                  <h4>£18 - £20</h4>
                  <p>
                    New to MyTutor and with lots of availability and earning
                    some great early reviews
                  </p>
                </label>
              </div>
              <div className="radio-wrapper">
                <input type="radio" name="lesson-price" id="mid" />

                <label htmlFor="mid">
                  <h4>£21 - £25</h4>
                  <p>
                    Tutoring for over 6 months, completed lots of lessons and
                    received very positive reviews
                  </p>
                </label>
              </div>

              <div className="radio-wrapper">
                <input type="radio" name="lesson-price" id="high" />
                <label htmlFor="high">
                  <h4>£26 - £43</h4>
                  <p>
                    Our most accomplished tutors. Excellent reviews and a track
                    record proven results
                  </p>
                </label>
              </div>
              <div className="radio-wrapper">
                <input type="radio" name="lesson-price" id="veryhigh" />
                <label htmlFor="veryhigh">
                  <h4>I DON’T MIND</h4>
                  <p>We’ll show you tutors in all these price bands</p>
                </label>
              </div>
            </div>
          </div>

          <div className="time-container">
            <label htmlFor="">
              AWHEN IS A GOOD TIME TO HAVE A FREE MEETING WITH YOUR TUTOR?
            </label>
            <div className="time-container-content">
              <div className="time-wrapper">
                <label htmlFor="find-tutor-pick-day">PICK A DAY</label>
                <input type="date" id="find-tutor-pick-day" />
              </div>
              <div className="time-wrapper">
                <label htmlFor="find-tutor-pick-time">
                  PICK A TIME (UK TIME)
                </label>

                <input type="time" id="find-tutor-pick-time" />
              </div>
              <div className="checkbox-wrapper">
                <label htmlFor=""></label>
                <input type="checkbox" name="time" id="time-not-sure" />
                <label htmlFor="time-not-sure">I’LL DECIDE LATER</label>
              </div>
            </div>
          </div>

          <div className="radio-container ">
            <label htmlFor="">ANY GENDER PREFERENCE?</label>
            <div className="radio-container-content gender-radio-container-content">
              <div className="radio-wrapper">
                <input type="radio" name="gender" id="MALE" />
                <label htmlFor="MALE">MALE</label>
              </div>
              <div className="radio-wrapper">
                <input type="radio" name="gender" id="FEMALE" />

                <label htmlFor="FEMALE">FEMALE</label>
              </div>
              <div className="radio-wrapper">
                <input type="radio" name="gender" id="gender-not-sure" />
                <label htmlFor="gender-not-sure">I DONT MIND</label>
              </div>
            </div>
          </div>

          <div className="textarea-wrapper">
            <label htmlFor="student-info-textarea">
              IS THERE ANYTHING ELSE WE SHOULD KNOW?
            </label>
            <textarea
              name=""
              id="student-info-textarea"
              cols="30"
              rows="10"
            ></textarea>
          </div>

          {/* CONTACT DETAILS */}
          <div className="contact-details">
            <h1>Your contact details</h1>
            <p>
              Our tutor expert team will get back to you within the hour. We’ll
              then help you sort a free 15 minute meeting (in our lesson space)
              so you can get to know them before booking any lessons.
            </p>

            <div className="contact-input-wrapper">
              <label htmlFor="student-contact-name">full name</label>
              <input
                type="text"
                id="student-contact-name"
                placeholder="Type your full name"
              />
            </div>
            <div className="contact-input-wrapper">
              <label htmlFor="student-contact-email">email</label>
              <input
                type="email"
                id="student-contact-email"
                placeholder="Type your email"
              />
            </div>
            <div className="contact-input-wrapper">
              <label htmlFor="student-phone-number">PHONE NUMBER</label>
              <input
                type="text"
                id="student-phone-number"
                placeholder="Type your phone number
                            "
              />
            </div>

            <input
              type="submit"
              value="submit request"
              className="submit-button-tutor-find-out"
            />
          </div>
        </form>
      </div>
      <ShareWork />
      <Footer />
    </div>
  );
}

export default FindTutor;
