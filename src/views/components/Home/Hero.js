import React from "react";

function Hero() {
  return (
    <div className="Hero">
      <div className="hero-content">
        <div className="hero-presentation">
          <h1>
            <span>Online tutoring</span> that delivers results
          </h1>
          <p>
            Keep your child’s studies on track with interactive online lessons
          </p>
          <form>
            <div className="search-box">
              <div className="input-wrapper">
                <input type="text" placeholder="Search a subject" />
              </div>
              <div className="find-a-tutor-button-wrapper">
                <button className="find-a-tutor-button">Find a tutor</button>
              </div>
            </div>
          </form>
        </div>
        <div className="hero-image">
          {/* <img src="https://cdn.mytutor.co.uk/images/uploads/desk-laptop.jpg" /> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
