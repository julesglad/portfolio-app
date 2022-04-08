import resume from "../../assets/JulieGladdenResume2022.png"


const CTA = () => {
  return (
    <div className="cta">
      <a href={resume} download className="btn">
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Contact
      </a>
    </div>
  );
};

export default CTA;
