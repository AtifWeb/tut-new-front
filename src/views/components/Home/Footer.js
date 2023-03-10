import React from "react";

function Footer() {
  return (
    <div className="Footer">
      <div className="footer-content">
        <div className="footer-top">
          <nav>
            <li>Company Information</li>
            <li>About us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Subject answers</li>
            <li>Become a tutor</li>
            <li>Schools</li>
            <li>Staying safe online</li>
            <li>FAQs</li>
            <li>Using the lesson space</li>
            <li>Testimonials &amp; press</li>
            <li>Sitemap</li>
          </nav>
          <nav>
            <li>Popular Requests</li>
            <li>Maths tutor</li>
            <li>Chemistry tutor</li>
            <li>Physics tutor</li>
            <li>Biology tutor</li>
            <li>English tutor</li>
            <li>Tutoring London</li>
            <li>Tutoring Manchester</li>
            <li>Tutoring Birmingham</li>
            <li>Tutoring Cardiff</li>
            <li>Tutoring St Albans</li>
            <li>Tutoring around the UK</li>
          </nav>

          <div className="contact-information">
            <h2>We're here to help</h2>
            <p>+44 (0) 203 773 6020</p>
            <p>support@mytutor.co.uk</p>
            <p className="contact-us-button">Contact us</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© MyTutorWeb Ltd 2013-2021</p>
          <p>Terms & Conditions | Privacy Policy | Developed with Mercury1</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
