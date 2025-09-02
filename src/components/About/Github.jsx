import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";

function Github() {
  return (
    <div style={{ 
      padding: "60px 0", 
      background: "#0e0a19",
      textAlign: "center"
    }}>
      <Row className="justify-content-center">
        <Col lg={8}>
          <h1 className="project-heading" style={{ 
            color: "#ccd6f6",
            fontSize: "2.5rem",
            marginBottom: "20px"
          }}>
            My <span className="purple">GitHub</span>
          </h1>
          
          <p style={{
            color: "#8892b0",
            fontSize: "1.1rem",
            lineHeight: "1.6",
            maxWidth: "700px",
            margin: "0 auto 30px"
          }}>
            I'm passionate about open-source development and love contributing to the developer community. 
            Check out my GitHub profile to see my projects and contributions.
          </p>
          
          <a 
            href="https://github.com/Hamza-Zahoor157" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "12px 30px",
              borderRadius: "4px",
              fontWeight: "500",
              textDecoration: "none",
              background: "#6f42c1",
              color: "white",
              border: "1px solid #6f42c1",
              transition: "all 0.3s ease"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "#5a32a8";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 5px 15px rgba(111, 66, 193, 0.4)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "#6f42c1";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <FaGithub />
            View My GitHub Profile
          </a>
        </Col>
      </Row>
    </div>
  );
}

export default Github;
