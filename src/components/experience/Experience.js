import "./experience.css";
import { HiBadgeCheck } from "react-icons/hi";
import Tooltip from "@mui/material/Tooltip";

const Experience = () => {
  return (
    <section id="experience" className="experience__background">
      <h2>Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <div className="row row-cols-md-4 text-center">
            <Tooltip title="Angular">
              <i className="devicon-angularjs-plain col"></i>
            </Tooltip>
            <Tooltip title="Bootstrap">
              <i className="devicon-bootstrap-plain col"></i>
            </Tooltip>
            <Tooltip title="Figma">
              <i className="devicon-figma-plain col"></i>
            </Tooltip>
            <Tooltip title="Azure">
              <i className="devicon-azure-plain col"></i>
            </Tooltip>
            <Tooltip title="Firebase">
              <i className="devicon-firebase-plain col"></i>
            </Tooltip>
            <Tooltip title="HTML">
              <i className="devicon-html5-plain col"></i>
            </Tooltip>
            <Tooltip title="Javascript">
              <i className="devicon-javascript-plain col"></i>
            </Tooltip>
            <Tooltip title="Typescript">
              <i className="devicon-typescript-plain col"></i>
            </Tooltip>
            <Tooltip title="VS Code">
              <i className="devicon-vscode-plain col"></i>
            </Tooltip>
            <Tooltip title="Webpack - Module Federation">
              <i className="devicon-webpack-plain col"></i>
            </Tooltip>
            <Tooltip title="React">
              <i className="devicon-react-original col"></i>
            </Tooltip>
            <Tooltip title="CSS">
              <i className="devicon-css3-plain col"></i>
            </Tooltip>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
