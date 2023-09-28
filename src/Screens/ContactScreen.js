import React from "react";
import "../StyleSheets/ContactScreen.css";

class ContactScreen extends React.Component {
    render() {
        return (
            <div id="ContactScreen">
                <h1>------- contact ME -------</h1>
                <h2>find me online</h2>
                <div className="TemplateContainer">
                    <a
                        href="https://www.linkedin.com/in/mohsin-sayed-"
                        target="_blank"
                    >
                        <img
                            src="assets/icons/linkedin.png"
                            alt="linkedin-icon"
                            width="40"
                        />
                        <p>linkedIn</p>
                    </a>
                    <a
                        href="https://www.instagram.com/mohsinsayed_"
                        target="_blank"
                    >
                        <img
                            src="assets/icons/instagram.png"
                            alt="instagram-icon"
                            width="40"
                        />
                        <p>instagram</p>
                    </a>
                    <a href="https://github.com/mohsinmsayed" target="_blank">
                        <img
                            src="assets/icons/github.png"
                            alt="github-icon"
                            width="40"
                        />
                        <p>github</p>
                    </a>
                </div>
                <h2>contact me</h2>
                <div className="TemplateContainer">
                    <a href="tel:+918097362084">
                        <img
                            src="assets/icons/whatsapp.png"
                            alt="call-icon"
                            width="40"
                        />
                        <p>+91 809 736 2084</p>
                    </a>
                    <a href="mailto:mohsinsayed1999@gmail.com">
                        <img
                            src="assets/icons/email.png"
                            alt="email-icon"
                            width="40"
                        />
                        <p>mohsinsayed1999@gmail.com</p>
                    </a>
                </div>
            </div>
        );
    }
}

export default ContactScreen;
