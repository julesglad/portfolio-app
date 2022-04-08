import "./portfolio.css";
import portfoliolandingpage from "../../assets/landingpage.png";
import newproject from "../../assets/newproject1.png";

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio__background">
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
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
          <a href="https://github.com" className="btn" target="_blank">
            Github
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={newproject} alt="" />
          </div>
          <h3>New Employee Database</h3>
          <h5>Created with Java Springboot and MySQL.</h5>
          <a href="https://github.com" className="btn" target="_blank">
            Github
          </a>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
