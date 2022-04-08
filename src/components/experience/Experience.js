import "./experience.css";
import { HiBadgeCheck } from "react-icons/hi";

const Experience = () => {
  return (
    <section id="experience" className="experience__background">
      <h2>Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Here's what I can do</h3>
          <div className="experience__content">
            <article className="experience__details">
              <HiBadgeCheck className="experience__details-icon" />
              <h4>HTML</h4>
            </article>
            <article className="experience__details">
              <HiBadgeCheck className="experience__details-icon" />
              <h4>CSS</h4>
            </article>
            <article className="experience__details">
              <HiBadgeCheck className="experience__details-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="experience__details">
              <HiBadgeCheck className="experience__details-icon" />
              <h4>React</h4>
            </article>
            <article className="experience__details">
              <HiBadgeCheck className="experience__details-icon" />
              <h4>Java</h4>
            </article>
            <article className="experience__details">
              <HiBadgeCheck className="experience__details-icon" />
              <h4>Spring Boot</h4>
            </article>
            <article className="experience__details">
              <HiBadgeCheck className="experience__details-icon" />
              <h4>MySQL</h4>
            </article>
            <article className="experience__details">
              <HiBadgeCheck className="experience__details-icon" />
              <h4>Thymeleaf</h4>
            </article>
            <article className="experience__details">
              <HiBadgeCheck className="experience__details-icon" />
              <h4>Spring Data JPA</h4>
            </article>
            <article className="experience__details">
              <HiBadgeCheck className="experience__details-icon" />
              <h4>Git</h4>
            </article>
            <article className="experience__details">
              <HiBadgeCheck className="experience__details-icon" />
              <h4>Photoshop</h4>
            </article>
            <article className="experience__details">
              <HiBadgeCheck className="experience__details-icon" />
              <h4>Lightroom</h4>
            </article>
            <article className="experience__details">
              <HiBadgeCheck className="experience__details-icon" />
              <h4>Adobe Premiere</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
