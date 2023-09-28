import React from "react";
import "../../StyleSheets/ExperienceSection.css";

class ExperienceSection extends React.Component {
    render() {
        return (
            <div id="ExperienceSection">
                <h1>------- experience -------</h1>
                <div id="TimelineContainer">
                    <div className="TimelineElement">
                        <div className="LineElement"></div>
                        <div className="CircleElement"></div>
                        <h1>
                            <img src="assets/icons/LTI.png" alt="LTI Logo" />
                            LTI - Larsen & Toubro Infotech&reg;
                        </h1>
                        <h5>Airoli, Thane, Maharashtra - India</h5>
                        <h3>June 2021 - Present &emsp;|&emsp; 2+ years</h3>
                        <h2>Engineer - Cloud & Infra Services</h2>
                        <p>
                            ServiceNOW&reg; HRSD Developer
                            <br />
                            Worked as a ServiceNOW&reg; Developer to Develop and
                            Maintain Clients' Internal Cloud Infrastructure
                            <br />- Implementing HRSD module for UK based energy
                            client
                            <br />- This involves creating HR Services,
                            Workflows, Lifecycle Activities
                            <br />- Inbound/Outbound Integration (using REST)
                            <br />- Creating HR Services, Workflows, Lifecycle
                            Activities on ServiceNOW Platform
                            <br />- Case and Knowledge Management
                            <br />- Setting up ESC Portal (Employee Center)
                        </p>
                        <h4>
                            Skills: ServiceNOW Developer | ServiceNOW HRSD |
                            ServiceNOW Administration
                        </h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default ExperienceSection;
