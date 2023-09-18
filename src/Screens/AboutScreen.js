import React from "react";
import "../StyleSheets/AboutScreen.css";

// importing sections
import IntroductionSection from "../Sections/AboutScreen/IntroductionSection";
import EducationSection from "../Sections/AboutScreen/EducationSection";
import ExperienceSection from "../Sections/AboutScreen/ExperienceSection";
import ContactScreen from "./ContactScreen";

class AboutScreen extends React.Component {
    render() {
        return (
            <div id="AboutScreen">
                <IntroductionSection />
                <EducationSection />
                <ExperienceSection />
                <ContactScreen />
            </div>
        );
    }
}

export default AboutScreen;
