import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineSolution } from "react-icons/ai";
import { FiAward } from "react-icons/fi";
import { AiFillMessage } from "react-icons/ai";
import { BiBookBookmark } from "react-icons/bi";
import { BsFillFileTextFill } from "react-icons/bs";
import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <Tooltip title="Home">
        <a
          href="#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          <AiOutlineHome />
        </a>
      </Tooltip>
      <Tooltip title="About">
        <a
          href="#about"
          onClick={() => setActiveNav("about")}
          className={activeNav === "about" ? "active" : ""}
        >
          <AiOutlineSolution />
        </a>
      </Tooltip>
      <Tooltip title="Experience">
        <a
          href="#experience"
          onClick={() => setActiveNav("experience")}
          className={activeNav === "experience" ? "active" : ""}
        >
          <FiAward />
        </a>
      </Tooltip>
      <Tooltip title="Portfolio">
        <a
          href="#portfolio"
          onClick={() => setActiveNav("portfolio")}
          className={activeNav === "portfolio" ? "active" : ""}
        >
          <BiBookBookmark />
        </a>
      </Tooltip>
      <Tooltip title="Blog">
        <a
          href="#blog"
          onClick={() => setActiveNav("portfolio")}
          className={activeNav === "blog" ? "active" : ""}
        >
          <BsFillFileTextFill />
        </a>
      </Tooltip>
      <Tooltip title="Contact">
        <a
          href="#contact"
          onClick={() => setActiveNav("contact")}
          className={activeNav === "contact" ? "active" : ""}
        >
          <AiFillMessage />
        </a>
      </Tooltip>
    </nav>
  );
};

export default Nav;
