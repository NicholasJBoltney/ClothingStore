import React from "react";
import "./FooterStyles.css";
import { LoremIpsumSmall } from "../LoremIpsum";

export const Footer = () => {
  return (
    <div className="MainHolder">
      <div className="Left">{LoremIpsumSmall}</div>
      <div className="Information">
        <p>FAQs</p>
        <p>About</p>
        <p>Shipping</p>
        <p>Returns and Exhanges</p>
        <p>Size Chart</p>
      </div>
      <div className="NewsletterHolder">
        <div className="NewsletterHeading">Newsletter</div>
        <br></br>
        <div className="NewsLetterDescription">
          Sign up for exclusive offers, original stories, events and more.
        </div>
        <br></br>
        <input className="EmailInput" placeholder="Enter email"></input>
        <br></br>
        <button className="SignUpBtn">Sign-up</button>
      </div>
    </div>
  );
};
