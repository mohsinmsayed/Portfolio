import React from "react";
import "../StyleSheets/HomeScreen.css";

// importing sections
import IntroSection from "../Sections/HomeScreen/IntroSection";
import AboutSection from "../Sections/HomeScreen/AboutSection";
import ProjectSection from "../Sections/HomeScreen/ProjectSection";
import ContactScreen from "./ContactScreen";

class HomeScreen extends React.Component {
    render() {
        return (
            <div id="HomeScreen">
                <IntroSection />
                <AboutSection />
                <ProjectSection />
                <ContactScreen />
            </div>
        );
    }
}

export default HomeScreen;
