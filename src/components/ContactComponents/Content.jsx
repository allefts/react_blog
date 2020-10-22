import React from "react";
import "../../App.css";
import { GrGithub } from "react-icons/gr";
import { FaFacebook, FaTwitch } from "react-icons/fa";
import { AiFillThunderbolt, AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const ContactContent = () => {
  return (
    <div className="contactContentWrapper">
      <div className="contactContentContainer">
        <h1 className="contactContentHeader">Contact</h1>
        <ul className="contacts">
          <li className="contact links">
            <a href="/">
              <GrGithub />
              <span> Github</span>
            </a>
          </li>
          <li className="contact links">
            <a href="/">
              <FaFacebook />
              <span> Facebook</span>
            </a>
          </li>
          <li className="contact links">
            <a href="/">
              <FaTwitch />
              <span> Twitch</span>
            </a>
          </li>
          <li className="contact links">
            <a href="/">
              <AiFillThunderbolt />
              <span> StackBlitz</span>
            </a>
          </li>
          <li className="contact links">
            <a href="/">
              <AiFillInstagram />
              <span> Instagram</span>
            </a>
          </li>
          <li className="contact links">
            <a href="/">
              <MdEmail />
              <span> alleftsoares@gmail.com</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactContent;
