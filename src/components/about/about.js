import "./about.css";
import ME from "../../assets/ME.jpg";
import cloud from "../../assets/cloud1.png";

const About = () => {
  return (
    <section id="about" className="about__background container">
      <h2>About</h2>
      <div className="about__backcloud">
        <img src={cloud} alt="cloud" />
      </div>

      <div className="row justify-content-center">
        <div className="about__content col-md-8">
          <h1>Hey, I'm Julie ✋🏻 </h1>
          <p>
            I'm a software engineer based in the USA. 🌎 I am passionate about front-end
            development with Angular.
            <br />
            ✅Fast, self-driven learner ✅Team Player ✅Band Director turned SWE 
          </p>

          <a href="#contact" className="btn btn-primary float-end">
            Let's talk!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
