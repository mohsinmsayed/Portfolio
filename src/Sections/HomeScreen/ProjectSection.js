import React from "react";
import { Link } from "react-router-dom";
import "../../StyleSheets/ProjectSection.css";

class ProjectSection extends React.Component {
    render() {
        return (
            <div id="ProjectSection">
                <h1>------- projects/endeavours -------</h1>
                <h2>
                    I've created several accessible, inclusive products and
                    digital experiences on the web
                </h2>
                <Link to="/projects" id="ProjectButton">
                    <img
                        src="assets/icons/project-w.png"
                        alt="projects-icon"
                        width="25"
                    />
                    Explore Projects
                </Link>
            </div>
        );
    }
}

export default ProjectSection;
