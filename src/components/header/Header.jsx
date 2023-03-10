import React from "react";
import CTA from "./CTA";
import "./header.css";
import ME from "../../assets/me.png";
import Header_Socials from "./Header_Socials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>नमस्ते, मैं हु</h5>
        <h1>Shasank Periwal</h1>
        <h5 className="text-light">Student at KIIT University</h5>
        <CTA />
        <Header_Socials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
