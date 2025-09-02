import React from "react";
import { Col, Row } from "react-bootstrap";
import { 
  SiVisualstudiocode, 
  SiPostman, 
  SiVercel, 
  SiMicrosoftoffice,
  SiGit,
  SiGithub,
  SiVisualstudio,
  SiFigma,
  SiLeetcode,
  SiMiro,
} from "react-icons/si";
import "./techstack.css";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* IDEs & Code Editors */}
      <Col xs={4} md={2} className="tech-icons" title="Visual Studio Code">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Visual Studio">
        <SiVisualstudio />
      </Col>
      
      {/* Version Control */}
      <Col xs={4} md={2} className="tech-icons" title="Git">
        <SiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="GitHub">
        <SiGithub />
      </Col>
      
      {/* API Tools */}
      <Col xs={4} md={2} className="tech-icons" title="Postman">
        <SiPostman />
      </Col>
      
      {/* Deployment */}
      <Col xs={4} md={2} className="tech-icons" title="Vercel">
        <SiVercel />
      </Col>
      
      {/* Design */}
      <Col xs={4} md={2} className="tech-icons" title="Figma">
        <SiFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Miro">
        <SiMiro />
      </Col>
      
      {/* Office */}
      <Col xs={4} md={2} className="tech-icons" title="Microsoft Office">
        <SiMicrosoftoffice />
      </Col>       
      {/* Learning */}
      <Col xs={4} md={2} className="tech-icons" title="LeetCode">
        <SiLeetcode />
      </Col>
    </Row>
  );
}

export default Toolstack;