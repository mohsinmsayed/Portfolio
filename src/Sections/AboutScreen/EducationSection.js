import React from "react";
import "../../StyleSheets/EducationSection.css";

class EducationSection extends React.Component {
    render() {
        return (
            <div id="EducationSection">
                <h1>------- education -------</h1>
                <div id="TimelineContainer">
                    <div className="TimelineElement">
                        <div className="LineElement"></div>
                        <div className="CircleElement"></div>
                        <h1>SSC - Secondary School Certificate</h1>
                        <h4>2005 - 2015</h4>
                        <h3>Anam High School</h3>
                        <p>
                            studied at Anam High School under SSC Board
                            (Secondary School Certificate) and learned science
                            and mathematics along with various languages and
                            other etiquettes
                        </p>
                        <h2>
                            percentage: <span>86.6%</span>
                        </h2>
                    </div>
                    <div className="TimelineElement">
                        <div className="LineElement"></div>
                        <div className="CircleElement"></div>
                        <h1>HSC - Higher Secondary Certificate</h1>
                        <h4>2015 - 2018</h4>
                        <h3>Rizvi College of Arts, Science and Commerce</h3>
                        <p>
                            studied at Rizvi College of Arts, Science and
                            Commerce under HSC Board (Higher Secondary
                            Certificate) in Science Stream and learned physics,
                            chemistry, biology, mathematics and other
                            certifications and etiquettes
                        </p>
                        <h2>
                            percentage: <span>58.3%</span>
                        </h2>
                    </div>
                    <div className="TimelineElement">
                        <div className="LineElement"></div>
                        <div className="CircleElement"></div>
                        <h1>BSc - Computer Science</h1>
                        <h4>2018 - 2021</h4>
                        <h3>Nagindas Khandwala College - Mumbai University</h3>
                        <p>
                            studied Computer Science at NK College under Mumbai
                            University and learned various Computer Science
                            related skills and concepts.
                            <br /> learned programming and related skills such
                            as Python, Java, JavaScript, Cloud Computing, Linux
                            etc.
                            <br />
                            completed several technical certifications related
                            to computer science skills and concepts
                        </p>
                        <h2>
                            Grade - <span>A</span>
                        </h2>
                    </div>
                </div>
                <h1>------- certifications -------</h1>
                <div id="CertificationsContainer">
                    <h1>The Web Developer Bootcamp</h1>
                    <h1>HTML, CSS, and Javascript for Web Developers</h1>
                    <h1>CS50's Mobile App Development with React Native</h1>
                    <h1>Certified System Administrator - ServiceNOW&reg;</h1>
                    <h1>
                        AWS Technical Certification - Amazon Web Services&reg;
                    </h1>
                </div>
            </div>
        );
    }
}

export default EducationSection;
