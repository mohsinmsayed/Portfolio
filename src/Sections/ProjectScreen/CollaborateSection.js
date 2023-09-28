import React from "react";
import "../../StyleSheets/CollaborateSection.css";

class CollaborateSection extends React.Component {
    render() {
        return (
            <div id="CollaborateSection">
                <h1>
                    I build accessible, inclusive products and digital
                    experiences on the web
                </h1>
                <h1>
                    wish to Collaborate with me on a project? let's connect and
                    see if we can work together and build something useful and
                    noteworthy
                </h1>
                <button
                    onClick={() => {
                        window.scroll({
                            top: document.body.scrollHeight,
                            left: 0,
                            behavior: "smooth",
                        });
                    }}
                    id="ContactButton"
                >
                    <img
                        src="assets/icons/contact-w.png"
                        alt="contact-icon"
                        width="20"
                    />
                    Contact ME
                </button>
                <h1>
                    I'm currently working on other new projects as well (apart
                    from the projects displayed below) where I'm building
                    inclusive digital products and experiences
                </h1>
            </div>
        );
    }
}

export default CollaborateSection;
