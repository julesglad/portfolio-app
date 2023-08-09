import resume from "../../assets/resumeimage.png"


const CTA = () => {
  return (
    <div className="cta">
      <a href={resume} download="J.Gladden Resume" className="btn">
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Contact
      </a>
    </div>
  );
};

export default CTA;
