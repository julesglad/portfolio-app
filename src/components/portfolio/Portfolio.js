import "./portfolio.css";
import portfoliolandingpage from "../../assets/landingpage.png";
import practiceGoImg from "../../assets/practicegoscreenshot.png";
import metronomeImg from "../../assets/metronome.png";
import goalsImg from "../../assets/practicegogoals.png";
import logsImg from "../../assets/loglist.png";
import signInImg from "../../assets/Screenshot 2023-04-16 213107.png";
import homeImg from "../../assets/homescreen.png";

import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Button from "react-bootstrap/Button";

import newproject from "../../assets/newproject1.png";
import springbootdatabase from "../../assets/springbootdatabase.png";

const Portfolio = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section id="portfolio" className="portfolio__background">
      <h2>Portfolio</h2>

      <div className="row justify-content-around portfolio__item">
        <div className="col-md-4 ">
          <img src={practiceGoImg} alt="" className="portfolio__item-image" />
        </div>
        <div className="col-md-6">
          <h1>
            PracticeGo{" "}
            <i className="devicon-angularjs-plain col portfolio_icons"></i>
            <i className="devicon-typescript-plain col portfolio_icons"></i>
            <i className="devicon-bootstrap-plain col portfolio_icons"></i>
            <i className="devicon-firebase-plain col portfolio_icons"></i>
          </h1>
          <h4>
            PracticeGo is a web app made for musicians. Using Firebase as the
            backend, users are able to log their practice sessions in detail,
            set goals, and use the built in metronome to keep time.
          </h4>
          <a
            href="https://github.com/julesglad/portfolio-app"
            className="btn"
            target="_blank"
          >
            Github
          </a>
          <a href="https://practicego.app" className="btn" target="_blank">
            Live Site
          </a>
          <a className="btn" onClick={handleShow}>
            Screen Shots
          </a>
          <Modal size="xl" show={show} onHide={handleClose} scrollable={true}>
            <Modal.Header closeButton>
              <Modal.Title>
                <h2 className="modal-title">PracticeGo Screenshots</h2>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img src={practiceGoImg} alt="alt" />
              <img src={logsImg} alt="alt" />
              <img src={metronomeImg} alt="alt" />
              <img src={goalsImg} alt="alt" />
              <img src={homeImg} alt="alt" />
              <img src={signInImg} alt="alt" />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>

      <div className="row justify-content-around portfolio__item">
      <div className="col-lg-4 order-lg-2">
          <img
            src={portfoliolandingpage}
            alt=""
            className="portfolio__item-image"
          />
        </div>
        <div className="col-lg-6 order-lg-1">
          <h1>
            Personal Portfolio{" "}
            <i className="devicon-react-original col portfolio_icons"></i>
            <i className="devicon-javascript-plain col portfolio_icons"></i>
            <i className="devicon-bootstrap-plain col portfolio_icons"></i>
            <i class="devicon-css3-plain col portfolio_icons"></i>
          </h1>
          <h4>
            My personal porfolio created with ReactJS. Features include a
            floating navigation, carousel, and contact form.
          </h4>
          <a
            href="https://github.com/julesglad/portfolio-app"
            className="btn"
            target="_blank"
          >
            Github
          </a>
        </div>
       
      </div>
      {/* <div className=" portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={portfoliolandingpage} alt="" />
          </div>
          <h3>Personal Portfolio</h3>
          <h5>My personal porfolio created with ReactJS. </h5>
          <a href="https://github.com/julesglad/portfolio-app" className="btn" target="_blank">
            Github
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={newproject} alt="" />
          </div>
          <h3>Practice.Go</h3>
          <h5>A web application for musicians to track their progress.</h5>
          <a href="https://github.com/julesglad/Practice-Go" className="btn" target="_blank">
            Github
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={springbootdatabase} alt="" />
          </div>
          <h3>New Employee Database</h3>
          <h5>Created with Java Springboot and MySQL.</h5>
          <a href="https://github.com/julesglad/Backend-Employee-Database" className="btn" target="_blank">
            Github
          </a>
        </article>
      </div> */}
    </section>
  );
};

export default Portfolio;
