import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import lawnCare from "../../Assets/Projects/lawn-care.png";
import jobPortal from "../../Assets/Projects/job-portal.png";
import aiPitch from "../../Assets/Projects/ai-pitch.png";
import hotelMvc from "../../Assets/Projects/hotel-mvc.png";
import blogSummarizer from "../../Assets/Projects/blog-summarizer.png";
import hotelJava from "../../Assets/Projects/hotel-java.png";
import cricketRag from "../../Assets/Projects/chatify.png"; // Placeholder - replace with actual RAG project image
import "./project-cards.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white", textAlign: "center", marginBottom: "50px" }}>
          Here are some of my recent projects.
        </p>
        <Row className="justify-content-center">
          <Col lg={4} md={6} sm={12} className="project-card-col">
            <ProjectCard
              imgPath={cricketRag}
              isBlog={false}
              title="ICC Cricket Rules RAG Assistant"
              description={["Built and deployed a production-ready RAG application using LangChain.",
                "Implemented advanced retrieval with MMR and contextual compression using Zilliz Cloud (Milvus) vector database.",
                "Integrated Groq LLM (Llama 3.3 70B) with HuggingFace embeddings and deployed on Streamlit Cloud"]}
              ghLink="https://github.com/Hamza-Zahoor157/ICC_Rule_Book-RAG"
              demoLink="https://iccrulebook-rag.streamlit.app/"
            />
          </Col>

          <Col lg={4} md={6} sm={12} className="project-card-col">
            <ProjectCard
              imgPath={lawnCare}
              isBlog={false}
              title="Lawn Care Services Platform"
              description={["Built a responsive, multi-location service mapping platform using Next.js 15, TypeScript, and Google Maps API.",
                 "Features dynamic content rendering and smooth animations with Framer Motion, optimized for performance across all devices."]}
              ghLink="https://github.com/Hamza-Zahoor157/Lawn_Care_Services"
              demoLink="https://lawn-care-services-three.vercel.app/"
            />
          </Col>

          <Col lg={4} md={6} sm={12} className="project-card-col">
            <ProjectCard
              imgPath={jobPortal}
              isBlog={false}
              title="Job Application Portal – ASP.NET MVC"
              description={["Developed a comprehensive job application portal with policy and claim-based authorization for Admin, HR, and Applicants.",
                "Implemented using Entity Framework Core, SQL Server, CRUD operations, Bootstrap, and ASP.NET Identity for authentication and authorization."]}
              ghLink="https://github.com/Hamza-Zahoor157/Job-Application-Portal"
            />
          </Col>

          <Col lg={4} md={6} sm={12} className="project-card-col">
            <ProjectCard
              imgPath={aiPitch}
              isBlog={false}
              title="AI Pitch Writer"
              description={["Developed an AI-powered pitch writing web application with magic link authentication using Supabase.",
                "Implemented AI logic via n8n, MongoDB for storage, and set up CI/CD deployment on Vercel for seamless updates and maintenance."]}
              ghLink="https://github.com/Hamza-Zahoor157/Nexium_Hamza_PitchWriter"
              demoLink="https://nexium-hamza-pitch-writer.vercel.app/"
            />
          </Col>

          <Col lg={4} md={6} sm={12} className="project-card-col">
            <ProjectCard
              imgPath={hotelMvc}
              isBlog={false}
              title="Hotel Management System – ASP.NET MVC"
              description={["Developed a full-stack hotel management system with real-time booking updates using SignalR.",
                        "Implemented CRUD operations for room management, role-based access control (Admin/Guest), and conflict-free reservation system to prevent double bookings."]}
              ghLink="https://github.com/Hamza-Zahoor157/Hotel_Management_System"
            />
          </Col>

          <Col lg={4} md={6} sm={12} className="project-card-col">
            <ProjectCard
              imgPath={blogSummarizer}
              isBlog={false}
              title="Blog Summarizer"
              description={["Next.js application featuring AI-powered summarization and Urdu translation capabilities.",
                "Integrated Supabase for summary storage and MongoDB for full text storage.",
                "Built with ShadCN UI and Tailwind CSS for a modern, responsive interface.",
                "Deployed on Vercel with CI/CD pipeline."]}
              ghLink="https://github.com/Hamza-Zahoor157/Nexium_Hamza_Zahoor_Assign2"
              demoLink="https://nexium-hamza-zahoor-assign2.vercel.app/"
            />
          </Col>

          <Col lg={4} md={6} sm={12} className="project-card-col">
            <ProjectCard
              imgPath={hotelJava}
              isBlog={false}
              title="Hotel Management System – Java"
              description={[
                "Built a comprehensive hotel management system using Java, HTML, CSS, JavaScript, and MySQL.",
                "Implemented core features including CRUD operations and JDBC for database connectivity.",
                "Developed session management for user authentication and state maintenance.",
              ]}
              ghLink="https://github.com/Hamza-Zahoor157/Hotel-Management-System--Web-Project"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;