import React from "react";
import { Link } from "react-router-dom";
import "./StyleSheets/Navigator.css";

class Navigator extends React.Component {
    constructor(props) {
        super(props);
        this.state = { menuActive: false };
        this.myRef = React.createRef();
    }

    render() {
        return (
            <div id="Navigator">
                <div
                    id="MenuBackground"
                    style={
                        this.state.menuActive
                            ? {
                                  width: "100vw",
                                  height: "100vh",
                                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                              }
                            : { width: "auto", height: "auto" }
                    }
                    onClick={
                        this.state.menuActive
                            ? () => {
                                  this.setState(() => ({
                                      menuActive: false,
                                  }));
                              }
                            : null
                    }
                >
                    <div
                        id="MenuButton"
                        onClick={() => {
                            this.setState((prevState) => ({
                                menuActive: !prevState.menuActive,
                            }));
                        }}
                    >
                        {this.state.menuActive ? (
                            <img src="assets/icons/close-w.png" alt="menu" />
                        ) : (
                            <img
                                src="assets/icons/hamburger-menu-w.png"
                                alt="menu"
                            />
                        )}
                    </div>
                    {this.state.menuActive && (
                        <div id="MenuContainer">
                            {window.location.pathname == "/" ? null : (
                                <Link
                                    onClick={() => {
                                        this.setState(() => ({
                                            menuActive: false,
                                        }));
                                    }}
                                    to="/"
                                    className="NavigationButton"
                                >
                                    <img
                                        src="assets/icons/home-w.png"
                                        alt="home-icon"
                                        width="25"
                                        style={{ marginRight: "2px" }}
                                    />
                                    Home
                                </Link>
                            )}
                            {window.location.pathname == "/about" ? null : (
                                <Link
                                    onClick={() => {
                                        this.setState(() => ({
                                            menuActive: false,
                                        }));
                                    }}
                                    to="/about"
                                    className="NavigationButton"
                                >
                                    <img
                                        src="assets/icons/about-me-w.png"
                                        alt="about-icon"
                                        width="20"
                                    />
                                    About
                                </Link>
                            )}
                            {window.location.pathname == "/projects" ? null : (
                                <Link
                                    onClick={() => {
                                        this.setState(() => ({
                                            menuActive: false,
                                        }));
                                    }}
                                    to="/projects"
                                    className="NavigationButton"
                                >
                                    <img
                                        src="assets/icons/project-w.png"
                                        alt="projects-icon"
                                        width="20"
                                    />
                                    Projects
                                </Link>
                            )}
                            <button
                                onClick={() => {
                                    window.scroll({
                                        top: document.body.scrollHeight,
                                        left: 0,
                                        behavior: "smooth",
                                    });
                                }}
                                className="NavigationButton"
                            >
                                <img
                                    src="assets/icons/contact-w.png"
                                    alt="contact-icon"
                                    width="20"
                                />
                                Contact
                            </button>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Navigator;
