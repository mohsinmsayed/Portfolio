import React from "react";
import { Link } from "react-router-dom";
import "../StyleSheets/ErrorScreen.css";

class ErrorScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { buttonHover: false };
    }
    render() {
        return (
            <div id="ErrorScreen">
                <div>
                    <h1>OOPS!</h1>
                    <h2>404 - PAGE NOT FOUND</h2>
                    <h3>it seems like you're lost</h3>
                    <h4>
                        the page you're looking for either does not exist or has
                        been removed
                    </h4>
                    <h5>go to homepage</h5>
                    <Link
                        to="/"
                        id="HomeButton"
                        onMouseOver={() =>
                            this.setState(() => ({ buttonHover: true }))
                        }
                        onMouseOut={() =>
                            this.setState(() => ({ buttonHover: false }))
                        }
                    >
                        {this.state.buttonHover ? (
                            <img
                                src="assets/icons/icons8-home-w.png"
                                alt="home-icon"
                                width="25"
                            />
                        ) : (
                            <img
                                src="assets/icons/icons8-home-b.png"
                                alt="home-icon"
                                width="25"
                            />
                        )}
                        <p>Home</p>
                    </Link>
                </div>
            </div>
        );
    }
}

export default ErrorScreen;
