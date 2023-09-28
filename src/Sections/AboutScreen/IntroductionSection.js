import React from "react";
import "../../StyleSheets/IntroductionSection.css";

class IntroductionSection extends React.Component {
    render() {
        return (
            <div id="IntroductionSection">
                <img src="assets/portraitSelf.png" alt="self portrait" />
                <div id="TextContainer">
                    <h1>Hi! I am MOHSIN SAYED</h1>
                    <h2>I am a DEVELOPER/PROGRAMMER</h2>
                    <h2>
                        I build accessible, inclusive products and digital
                        experiences on the web
                    </h2>
                    <h2>
                        I have expertise in Web Development, Cross-Platform App
                        Development and Cloud Computing Domains
                    </h2>
                    <h2>
                        I have completed my Graduation in Computer Science field
                        from Mumbai University in 2021. During my graduation
                        I've learned various Computer Science and Programming
                        related concepts and skills such as Web Development, App
                        Development, Cloud Computing and other related
                        skillsets.
                    </h2>
                    <h2>
                        After Graduation, I have worked as a Software Engineer
                        in a reputed Multi-National Organization named Larsen &
                        Toubro Infotech&reg;.
                    </h2>
                    <h2>
                        Programming and building various products and digital
                        experiences are my main hobbies and I spent most of my
                        time on these, although whenever I get some spare time I
                        tend to read fiction novels or watch movies.
                    </h2>
                </div>
            </div>
        );
    }
}

export default IntroductionSection;
