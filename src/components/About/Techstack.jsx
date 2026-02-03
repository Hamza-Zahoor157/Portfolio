import React from "react";
import { Col, Row } from "react-bootstrap";
import { 
  DiJavascript1, 
  DiReact, 
  DiNodejs, 
  DiMongodb, 
  DiJava,
  DiMysql,
  DiPython,
} from "react-icons/di";
import { 
  SiNextdotjs, 
  SiTailwindcss, 
  SiCsharp, 
  SiDotnet, 
  SiMicrosoftsqlserver, 
  SiPostgresql, 
  SiSupabase, 
  SiHtml5, 
  SiCss3,
  SiExpress,
  SiOracle,
  SiCplusplus,
  SiFramer,
  SiPytorch,
  SiStreamlit,
  SiOpenai,
  SiTypescript,
} from "react-icons/si";
import "./techstack.css";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Programming Languages */}
      <Col xs={4} md={2} className="tech-icons" title="C/C++">
        <SiCplusplus />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="JavaScript">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Java">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="C#">
        <SiCsharp />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Python">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="TypeScript">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="HTML5">
        <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="CSS3">
        <SiCss3 />
      </Col>
      
      {/* Frontend */}
      <Col xs={4} md={2} className="tech-icons" title="React">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Next.js">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Tailwind CSS">
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Framer Motion">
        <SiFramer />
      </Col>
      
      {/* Backend */}
      <Col xs={4} md={2} className="tech-icons" title="Node.js">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Express.js">
        <SiExpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title=".NET">
        <SiDotnet />
      </Col>
      
      {/* Databases */}
      <Col xs={4} md={2} className="tech-icons" title="MongoDB">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="SQL Server">
        <SiMicrosoftsqlserver />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="PostgreSQL">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Supabase">
        <SiSupabase />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MySQL">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Oracle">
        <SiOracle />
      </Col>
      
      {/* AI/ML Technologies */}
      <Col xs={4} md={2} className="tech-icons" title="PyTorch">
        <SiPytorch />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="OpenAI">
        <SiOpenai />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Streamlit">
        <SiStreamlit />
      </Col>

      {/* Note: LangChain, Milvus/Zilliz, ChromaDB, Pinecone, Groq, RAG, Vector DBs icons not available in react-icons */}
    </Row>
  );
}

export default Techstack;