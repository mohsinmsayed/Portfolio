import React from "react";
import "../StyleSheets/AboutScreen.css";

// importing sections
import IntroductionSection from "../Sections/AboutScreen/IntroductionSection";
import EducationSection from "../Sections/AboutScreen/EducationSection";
import ContactScreen from "./ContactScreen";

class AboutScreen extends React.Component {
    render() {
        return (
            <div id="AboutScreen">
                <IntroductionSection />
                <EducationSection />
                <ContactScreen />
            </div>
        );
    }
}

export default AboutScreen;
