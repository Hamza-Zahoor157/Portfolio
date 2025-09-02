import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight, ImLinkedin, ImEnvelop, ImPhone } from "react-icons/im";
import { FaGithub } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello! I'm <span className="purple">Hamza Zahoor</span>, a dedicated Software Engineering student at PUCIT with a strong academic record (CGPA: 3.79/4.0). Based in <span className="purple">Lahore, Pakistan</span>, I specialize in full-stack development with expertise in modern web technologies and cloud platforms.
            <br /><br />
            With hands-on experience in both frontend and backend development, I enjoy transforming complex problems into elegant, efficient solutions. My technical toolkit includes React, Node.js, .NET, and various databases, allowing me to build robust and scalable applications.
            <br /><br />
            <div className="contact-info">
              <p>
                <ImEnvelop /> <a href="mailto:hamzazahoor1067@gmail.com" className="purple" style={{ textDecoration: 'none', paddingLeft: '10px' }}>hamzazahoor1067@gmail.com</a>
              </p>
              <p>
                <ImPhone /> <span className="purple">+92 310 4666305</span>
              </p>
              <p>
                <ImLinkedin />{" "}
                <a href="https://www.linkedin.com/in/hamza-zahoor-056223268" target="_blank" rel="noopener noreferrer" className="purple" style={{ textDecoration: 'none', paddingLeft: '10px' }}>
                  LinkedIn Profile
                </a>
              </p>
              <p>
                <FaGithub />{" "}
                <a href="https://github.com/Hamza-Zahoor157" target="_blank" rel="noopener noreferrer" className="purple" style={{ textDecoration: 'none', paddingLeft: '10px' }}>
                    GitHub Profile
                </a>
              </p>
            </div>
            <br />
            Beyond coding, I'm passionate about:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Passionate about cricket and a die-hard Manchester United & Real Madrid football fan
            </li>
            <li className="about-activity">
              <ImPointRight /> Anime enthusiast - completed the Big 3, DBZ, and always exploring new series
            </li>
            <li className="about-activity">
              <ImPointRight /> Avid movie and series buff, always up for recommendations
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The best way to predict the future is to implement it."
          </p>
          <footer className="blockquote-footer">Alan Kay, Computer Scientist</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
