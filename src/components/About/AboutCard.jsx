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
            Hello! I'm <span className="purple">Hamza Zahoor</span>, a final-year Software Engineering student at PUCIT (CGPA: 3.81/4.0) with practical experience building and deploying full-stack applications and AI-enabled features. Based in <span className="purple">Lahore, Pakistan</span>.
            <br /><br />
            I have completed internships at <span className="purple">Nexium</span> (Web Developer), <span className="purple">Markonify</span> (Web Developer), and <span className="purple">Turing</span> (AI Training Engineer), gaining hands-on experience with production systems, AI workflows, and deployment pipelines.
            <br /><br />
            My expertise spans <span className="purple">RAG systems</span>, <span className="purple">LLM integration</span>, full-stack development with <span className="purple">Next.js, React, .NET, MERN Stack</span>, AI automation using <span className="purple">LangChain, n8n</span>, vector databases (<span className="purple">Milvus, ChromaDB, FAISS</span>), and modern databases like <span className="purple">Supabase, MongoDB, Prisma, SQL Server</span>.
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
              <ImPointRight /> Cricket and being a die-hard Manchester United & Real Madrid football fan
            </li>
            <li className="about-activity">
              <ImPointRight /> Anime - I've completed the Big 3, DBZ, and am always exploring new series
            </li>
            <li className="about-activity">
              <ImPointRight /> Movies and TV series - always up for recommendations
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
