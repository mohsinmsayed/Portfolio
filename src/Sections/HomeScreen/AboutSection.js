import React from "react";
import { Link } from "react-router-dom";
import "../../StyleSheets/AboutSection.css";

class AboutSection extends React.Component {
    render() {
        return (
            <div id="AboutSection">
                <div id="TextBox">
                    <h1>------- about ME -------</h1>
                    <h2>I am a DEVELOPER / PROGRAMMER</h2>
                    <h2>
                        I build accessible, inclusive products and digital
                        experiences on the web
                    </h2>
                    <h2>
                        I am a Computer Science Graduate with expertise in Web
                        Development, Cross-Platform App Development, and
                        ServiceNOW domains
                    </h2>
                </div>
                <h1>------- skills -------</h1>
                <div id="SkillSection">
                    <div>
                        <img
                            src="assets/icons/web-development.png"
                            alt="web-development-icon"
                            width="50"
                        />
                        <h1>WEB DEVELOPMENT</h1>
                    </div>
                    <div>
                        <img
                            src="assets/icons/app-development.png"
                            alt="app-development-icon"
                            width="50"
                        />
                        <h1>CROSS-PLATFORM APP DEVELOPMENT</h1>
                    </div>
                    <div>
                        <img
                            src="assets/icons/servicenow.png"
                            alt="servicenow-icon"
                            width="50"
                        />
                        <h1>ServiceNOW&reg; DEVELOPER</h1>
                    </div>
                </div>
                <Link to="/about" id="AboutButton">
                    <img
                        src="assets/icons/about-me-w.png"
                        alt="about-me-icon"
                        width="25"
                    />
                    Explore About ME
                </Link>
            </div>
        );
    }
}

export default AboutSection;
