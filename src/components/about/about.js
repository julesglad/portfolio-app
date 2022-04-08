import "./about.css";
import ME from "../../assets/ME.jpg";
import cloud from "../../assets/cloud1.png";

const About = () => {
  return (
    <section id="about" className="about__background">
      <h2>About</h2>
      <div className="about__backcloud">
        <img src={cloud} alt="cloud" />
      </div>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <p>
            Hi, I'm Julie Gladden. I'm a Web Developer based in Arkansas, USA. I
            am a self-taught developer. My focus is Front-End developement in
            React, also with experience in Java Springboot using Maven. I am
            quick to learn, team-focused, and looking forward to taking my first
            steps into the world of tech.{" "}
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's talk!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
