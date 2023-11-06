import React from "react";
import "./Footer.css";
import Wave from "../../images/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Link from "@iconscout/react-unicons/icons/uil-linkedin";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
import Phone from "@iconscout/react-unicons/icons/uil-phone";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} className="wave" />
      <div className="f-content">
        <span>sibomanaelissa71@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/el_issa562/">
            <Insta color={"#E4405F"} size={"3rem"} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100087211563231">
            <Facebook color={"blue"} size={"3rem"} />
          </a>
          <a href="https://github.com/Elissa100">
            <Github color={"black"} size={"3rem"} />
          </a>
          <a href="https://www.linkedin.com/in/elissa-sibomana-204b36260/">
            <Link color={"blue"} size={"3rem"} />
          </a>
          <a href="https://twitter.com/ElissaSibo44458">
            <Twitter color={"blue"} size={"3rem"} />
          </a>

          <a href="https://voice.google.com/calls">
            <Phone color={"green"} size={"3rem"} />
            <p className="phone-number">+250790320991</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
