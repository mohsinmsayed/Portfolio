import React from "react";
import "../../StyleSheets/SkillsetSection.css";

// importing CV pdf file
import CV from "../../CV.pdf";

class SkillsetSection extends React.Component {
    render() {
        return (
            <div id="SkillsetSection">
                <h1>------- skill set -------</h1>
                <h2>- primary skills -</h2>
                <div id="MainSkillContainer">
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
                <h2>- programming languages -</h2>
                <div className="SkillsSection">
                    <div>
                        <img
                            src="assets/icons/python.png"
                            alt="servicenow-icon"
                            width="40"
                        />
                        <h1>Python</h1>
                    </div>
                    <div>
                        <img
                            src="assets/icons/javascript.png"
                            alt="servicenow-icon"
                            width="40"
                        />
                        <h1>JavaScript</h1>
                    </div>
                    <div>
                        <img
                            src="assets/icons/java.png"
                            alt="servicenow-icon"
                            width="40"
                        />
                        <h1>Java</h1>
                    </div>
                    <div>
                        <img
                            src="assets/icons/sql.png"
                            alt="servicenow-icon"
                            width="40"
                        />
                        <h1>SQL</h1>
                    </div>
                </div>
                <h2>- databases -</h2>
                <div className="SkillsSection">
                    <div>
                        <img
                            src="assets/icons/mysql.png"
                            alt="servicenow-icon"
                            width="40"
                        />
                        <h1>MySQL</h1>
                    </div>
                    <div>
                        <img
                            src="assets/icons/mongodb.png"
                            alt="servicenow-icon"
                            width="40"
                        />
                        <h1>MongoDB</h1>
                    </div>
                    <div>
                        <img
                            src="assets/icons/firebase.png"
                            alt="servicenow-icon"
                            width="40"
                        />
                        <h1>Firebase</h1>
                    </div>
                </div>
                <h2>- libraries & frameworks -</h2>
                <div className="SkillsSection">
                    <div>
                        <img
                            src="assets/icons/reactjs.png"
                            alt="servicenow-icon"
                            width="40"
                        />
                        <h1>ReactJS</h1>
                    </div>
                    <div>
                        <img
                            src="assets/icons/react-native.png"
                            alt="servicenow-icon"
                            width="40"
                        />
                        <h1>React Native</h1>
                    </div>
                    <div>
                        <img
                            src="assets/icons/nodejs.png"
                            alt="servicenow-icon"
                            width="40"
                        />
                        <h1>NodeJS</h1>
                    </div>
                    <div>
                        <img
                            src="assets/icons/express-js.png"
                            alt="servicenow-icon"
                            width="40"
                        />
                        <h1>ExpressJS</h1>
                    </div>
                    <div>
                        <img
                            src="assets/icons/bootstrap.png"
                            alt="servicenow-icon"
                            width="40"
                        />
                        <h1>Bootstrap</h1>
                    </div>
                </div>
                <h2>- other related skills -</h2>
                <div className="SkillsSection">
                    <div>
                        <img
                            src="assets/icons/linux.png"
                            alt="servicenow-icon"
                            width="40"
                        />
                        <h1>Linux</h1>
                    </div>
                    <div>
                        <img
                            src="assets/icons/html-css.png"
                            alt="servicenow-icon"
                            width="40"
                        />
                        <h1>HTML&nbsp;/&nbsp;CSS</h1>
                    </div>
                    <div>
                        <img
                            src="assets/icons/ui-ux.png"
                            alt="servicenow-icon"
                            width="40"
                        />
                        <h1>UI&nbsp;/&nbsp;UX</h1>
                    </div>
                    <div>
                        <img
                            src="assets/icons/windows-server.png"
                            alt="servicenow-icon"
                            width="40"
                        />
                        <h1>Windows Server</h1>
                    </div>
                    <div>
                        <img
                            src="assets/icons/git.png"
                            alt="servicenow-icon"
                            width="40"
                        />
                        <h1>Git</h1>
                    </div>
                </div>
                <h2>- servicenow related -</h2>
                <div className="SkillsSection">
                    <div>
                        <img
                            src="assets/icons/servicenow.png"
                            alt="servicenow-icon"
                            width="40"
                        />
                        <h1>ServiceNOW Developer</h1>
                    </div>
                    <div>
                        <img
                            src="assets/icons/servicenow.png"
                            alt="servicenow-icon"
                            width="40"
                        />
                        <h1>ServiceNOW Adminstration</h1>
                    </div>
                    <div>
                        <img
                            src="assets/icons/servicenow.png"
                            alt="servicenow-icon"
                            width="40"
                        />
                        <h1>ServiceNOW HRSD</h1>
                    </div>
                    <div>
                        <img
                            src="assets/icons/servicenow.png"
                            alt="servicenow-icon"
                            width="40"
                        />
                        <h1>ServiceNOW ITSM</h1>
                    </div>
                </div>
                <h3>
                    ---&emsp; I tend to stay in a continuous learning journey
                    where I learn and improve on the current skills also learn
                    new skills to further improve my skill set &emsp;---
                </h3>
                <h3 style={{ marginTop: "30px", fontWeight: "400" }}>
                    you can download for reference, which contains all relevant
                    information about me
                </h3>
                <a
                    href={CV}
                    download="Mohsin Sayed - CV"
                    target="_blank"
                    rel="noreferrer"
                    id="CVButton"
                >
                    <button>Download CV</button>
                </a>
            </div>
        );
    }
}

export default SkillsetSection;
