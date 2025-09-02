import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a passionate Software Engineer currently pursuing my BS in Software Engineering at Punjab University College of Information and Technology with a CGPA of 3.79.
              <br />
              <br />I'm proficient in
              <i>
                <b className="purple"> C/C++, C#, Java, and JavaScript/TypeScript. </b>
              </i>
              <br />
              <br />
              My expertise lies in building &nbsp;
              <i>
                <b className="purple">Full-Stack Web Applications </b> using modern technologies like{" "}
                <b className="purple">
                  Next.js, React, Node.js, and various databases.
                </b>
              </i>
              <br />
              <br />
              I have hands-on experience with <b className="purple">MERN Stack</b> and
              <i>
                <b className="purple">
                  {" "}
                  modern development tools
                </b>
              </i>
              &nbsp; including
              <i>
                <b className="purple"> ShadCN UI, Tailwind CSS, and Framer Motion</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Hamza-Zahoor157"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:hamzazahoor1067@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="Email"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/hamza-zahoor-056223268"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
