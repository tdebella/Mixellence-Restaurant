import React from "react";
import FooterCSS from "./Footer.module.css";
import { StyledButton } from "../styled-components/styled-components";

// social icons
import Instagram from "../assets/Photos/instagram.png";
import Facebook from "../assets/Photos/facebook.png";
import Twitter from "../assets/Photos/twitter.png";

const ContactUs = () => {
  return (
    <div id="contact" className={FooterCSS.contactPage}>
      <div className={FooterCSS.formContact}>
        <form>
          <input
            className={FooterCSS.formInput}
            type="text"
            placeholder="Your Name"
            required
          />
          <input
            className={FooterCSS.formInput}
            type="email"
            placeholder="Your Email"
            required
          />
          <input
            className={FooterCSS.formInput}
            type="number"
            placeholder="Phone Number"
            required
          />
          <input
            className={FooterCSS.formInput}
            type="text"
            placeholder="Interested in "
            name="Interested in"
            required
          />
          <input
            className={FooterCSS.formInput}
            type="message"
            placeholder="Message"
            required
          />{" "}
          <br /> <br />
          <br />
          <StyledButton>{"Send"}</StyledButton>
        </form>

        <div className={FooterCSS.contact}>
          <h3 className={FooterCSS.heading2}>CONTACT __________US</h3>
          <p className={FooterCSS.bodyText2}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae laboriosam nam eius ab nihil, temporibus sequi qui,
            earum quidem praesentium pariatur distinctio.
          </p>
        </div>
      </div>

      <div className={FooterCSS.social}>
        <div>
          <img className={FooterCSS.col} src={Instagram} alt="icon-instagram" />
        </div>
        <div>
          <img className={FooterCSS.col} src={Facebook} alt="icon-facebook" />
        </div>
        <div>
          <img className={FooterCSS.col} src={Twitter} alt="icon-twitter" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

// source for emailjs
// https://www.youtube.com/watch?v=rDxCT5A-Hho
