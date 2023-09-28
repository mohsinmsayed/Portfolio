import React from "react";
import "../../StyleSheets/CompletedProjectsSection.css";

class CompletedProjectsSection extends React.Component {
    render() {
        return (
            <div id="CompletedProjectsSection">
                <h1>--- old projects ---</h1>
                <div className="TemplateContainer">
                    <div>
                        <img src="assets/icons/Quiz.png" alt="Quiz Logo" />
                        <div>
                            <h1>Quiz</h1>
                            <h3>tech stack - HTML | CSS | JavaScript</h3>
                            <h2>
                                created a Quiz Game website using HTML, CSS, and
                                JavaScript
                                <br />
                                users can play a simple quiz game of 10
                                questions (general knowledge questions) and can
                                answer based on provided multiselect options.
                                users can also track their score of correct and
                                incorrect answers
                            </h2>
                        </div>
                    </div>
                    <a
                        href="https://github.com/mohsinmsayed/Quiz"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Checkout Github Repository
                    </a>
                    <a
                        href="https://mohsinmsayed.github.io/Quiz/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Play "Quiz" Game
                    </a>
                </div>
                <div className="TemplateContainer">
                    <div>
                        <img
                            src="assets/icons/TicTacToe.png"
                            alt="TicTacToe Logo"
                        />
                        <div>
                            <h1>TicTacToe</h1>
                            <h3>tech stack - HTML | CSS | JavaScript</h3>
                            <h2>
                                created a simple Tic-Tac-Toe game using HTML,
                                CSS, and JavaScript
                                <br />
                                users can play a simple Tic Tac Toe game with
                                their friends. users can play unlimited turns
                                and can track their scores such as wins, loses,
                                and draws
                            </h2>
                        </div>
                    </div>
                    <a
                        href="https://github.com/mohsinmsayed/TicTacToe"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Checkout Github Repository
                    </a>
                    <a
                        href="https://mohsinmsayed.github.io/TicTacToe/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Play "TicTacToe" Game
                    </a>
                </div>
                <h1>--- this portfolio site ---</h1>
                <div className="TemplateContainer">
                    <div>
                        <img
                            src="assets/portraitSelf.png"
                            alt="Portfolio Logo"
                        />
                        <div>
                            <h1>Portfolio</h1>
                            <h3>
                                tech stack - ReactJS | JavaScript | HTML | CSS
                            </h3>
                            <h2>
                                created a portfolio website, built using
                                ReactJS, JavaScript, HTML, CSS
                                <br />
                                this site displays information about myself such
                                as my education, experience, skills, and other
                                achievements
                            </h2>
                        </div>
                    </div>
                    <a
                        href="https://github.com/mohsinmsayed/portfolio"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Checkout Github Repository
                    </a>
                    <a
                        href="https://www.mohsinsayed.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Explore Portfolio
                    </a>
                </div>
            </div>
        );
    }
}

export default CompletedProjectsSection;
