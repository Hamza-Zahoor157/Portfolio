import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import "./project-cards.css";

function ProjectCards(props) {
  // Format description array into bullet points
  const formatDescription = (description) => {
    // Check if description is an array or a string (for backward compatibility)
    const descriptionArray = Array.isArray(description) 
      ? description 
      : description.split('.').filter(sentence => sentence.trim().length > 0);
    
    // Create bullet points from description array
    return descriptionArray.map((sentence, index) => (
      <li key={index} className="description-bullet">
        {sentence.trim()}
      </li>
    ));
  };

  return (
    <Card className="project-card-view">
      <Card.Img 
        variant="top" 
        src={props.imgPath} 
        alt="project-preview" 
        className="project-card-img" 
      />
      
      <Card.Body className="project-card-body">
        <Card.Title className="project-card-title" style={{lineClamp: 1}}>
          {props.title}
        </Card.Title>
        
        <div className="project-description">
          <ul className="description-list">
            {formatDescription(props.description)}
          </ul>
        </div>
        
        <div className="project-card-buttons">
          <Button 
            variant="primary" 
            href={props.ghLink} 
            target="_blank" 
            className="project-card-button github-btn"
          >
            <BsGithub className="button-icon" />
            <span>{props.isBlog ? "Blog" : "GitHub"}</span>
          </Button>
          
          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              className="project-card-button demo-btn"
            >
              <CgWebsite className="button-icon" />
              <span>Live Demo</span>
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;