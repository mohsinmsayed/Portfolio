import React from "react";
import "../StyleSheets/ProjectScreen.css";

// importing sections
import CollaborateSection from "../Sections/ProjectScreen/CollaborateSection";
import CompletedProjectsSection from "../Sections/ProjectScreen/CompletedProjectsSection";
import ContactScreen from "./ContactScreen";

class ProjectScreen extends React.Component {
    render() {
        return (
            <div id="ProjectScreen">
                <CollaborateSection />
                <CompletedProjectsSection />
                <ContactScreen />
            </div>
        );
    }
}

export default ProjectScreen;
