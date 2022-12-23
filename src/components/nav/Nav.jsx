import React from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser, AiOutlineMessage } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Nav = () => {
  return (
    <nav>
      <a href="#" className="active">
        <AiOutlineHome />
      </a>
      <a href="#about">
        <AiOutlineUser />
      </a>
      <a href="#experience">
        <BiBook />
      </a>
      <a href="#project">
        <RiServiceLine />
      </a>
      <a href="#contact">
        <AiOutlineMessage />
      </a>
    </nav>
  );
};

export default Nav;
