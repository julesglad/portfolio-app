import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/julie-j-gladden/" target="_blank">
        <BsLinkedin className="header__socials-icon" />
      </a>{" "}
      <a href="https://linkedin.com" target="_blank"></a>
      <a href="https://github.com/julesglad" target="_blank">
        <FaGithub className="header__socials-icon" />
      </a>
    </div>
  );
};

export default HeaderSocials;
