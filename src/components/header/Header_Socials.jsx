import React from "react";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

const Header_Socials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/shasank-periwal-650612184/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/shasank27" target="_blank">
        <BsGithub />
      </a>
      <a href="https://www.instagram.com/shasankperiwal/" target="_blank">
        <BsInstagram />
      </a>
      <a href="https://leetcode.com/shasank27/" target="_blank">
        <SiLeetcode />
      </a>
    </div>
  );
};

export default Header_Socials;
