import React from "react";
import "../StyleSheets/HomeScreen.css";

// importing sections
import IntroSection from "../Sections/HomeScreen/IntroSection";

class HomeScreen extends React.Component {
    render() {
        return (
            <div id="HomeScreen">
                <IntroSection />
            </div>
        );
    }
}

export default HomeScreen;
