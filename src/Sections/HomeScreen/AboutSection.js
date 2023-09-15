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
                        <h1>WEB DEVELOPMENT</h1>
                    </div>
                    <div>
                        <h1>CROSS-PLATFORM APP DEVELOPMENT</h1>
                    </div>
                    <div>
                        <h1>ServiceNOW&reg; DEVELOPER</h1>
                    </div>
                </div>
                <Link to="/about" id="AboutButton">
                    <img
                        src="assets/icons/about-me-w.png"
                        alt="home-icon"
                        width="25"
                    />
                    Explore About ME
                </Link>
            </div>
        );
    }
}

export default AboutSection;
