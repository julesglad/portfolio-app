import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import "./header.css";
import cloud1 from "../../assets/cloud1.png";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1 className="floating">Julie Gladden</h1>
        <h5>Software Engineer</h5>
        <CTA />
        <div className="cloud__container">
          <div className="cloudone">
            <img src={cloud1} alt="cloud1" />
          </div>
        </div>
      </div>

      <HeaderSocials />
    </header>
  );
};

export default Header;
