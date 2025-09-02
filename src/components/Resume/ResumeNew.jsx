import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col, Modal, Button as BsButton, Spinner, Alert } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload, AiOutlineFullscreen, AiOutlineFullscreenExit, AiOutlineReload } from "react-icons/ai";
import { FaFilePdf, FaExternalLinkAlt } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./resume_new.css";

function ResumeNew() {
  const [fullscreen, setFullscreen] = useState(false);
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [downloadStatus, setDownloadStatus] = useState(null);
  const iframeRef = useRef(null);
  
  // Path to resume in the public folder
  const resumePath = "/Assets/Hamza_Zahoor_CV.pdf";
  const resumeFileName = 'Hamza_Zahoor_CV.pdf';
  
  // Check if PDF is accessible
  useEffect(() => {
    const checkPdf = async () => {
      try {
        const response = await fetch(resumePath);
        if (!response.ok) throw new Error('Failed to load resume');
        setError(null);
      } catch (err) {
        setError('Failed to load resume. Please try again later.');
        console.error('Error loading PDF:', err);
      } finally {
        setIsLoading(false);
      }
    };
    
    checkPdf();
  }, []);
  
  const toggleFullscreen = () => {
    const modal = document.querySelector('.resume-modal .modal-content');
    if (!document.fullscreenElement) {
      modal.requestFullscreen()
        .then(() => setFullscreen(true))
        .catch(err => {
          console.error('Fullscreen error:', err);
          toast.error('Fullscreen mode not supported by your browser');
        });
    } else {
      document.exitFullscreen()
        .then(() => setFullscreen(false))
        .catch(console.error);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const downloadResume = async (e) => {
    if (e) e.preventDefault();
    
    try {
      setDownloadStatus('downloading');
      
      const link = document.createElement('a');
      link.href = resumePath;
      link.download = resumeFileName;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      
      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        const response = await fetch(resumePath);
        const blob = await response.blob();
        window.navigator.msSaveOrOpenBlob(blob, resumeFileName);
      } else {
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
      
      setDownloadStatus('success');
      toast.success('Resume download started!');
      setTimeout(() => setDownloadStatus(null), 3000);
    } catch (err) {
      console.error('Download error:', err);
      setDownloadStatus('error');
      toast.error('Failed to start download. Please try again.');
      
      try {
        window.open(resumePath, '_blank');
        toast.info('Opened resume in new tab');
      } catch (fallbackErr) {
        console.error('Fallback error:', fallbackErr);
      }
      
      setTimeout(() => setDownloadStatus(null), 3000);
    }
  };
  
  const handlePdfLoad = () => {
    setIsLoading(false);
    setError(null);
  };
  
  const handlePdfError = () => {
    setIsLoading(false);
    setError('Failed to load PDF. Please try again or download the resume.');
  };

  return (
    <div className="resume-page-wrapper">
      <ToastContainer position="top-right" autoClose={3000} />
      <Particle />
      <Container fluid className="resume-section">
        <Container className="h-100">
          <Row className="justify-content-center h-100">
            <Col xs={12} className="text-center d-flex flex-column justify-content-center">
              <div className="resume-content">
                <h1 style={{marginLeft: "20px", marginRight: "20px"}} className="project-heading mb-4">My <strong className="purple">Resume</strong></h1>
                <div className="resume-icon-container">
                  <FaFilePdf size={80} className="resume-pdf-icon" />
                </div>
                <p style={{ color: "white", marginTop: "20px", fontSize: "1.1rem" }}>
                  Explore my professional journey and skills
                </p>
                
                {error && (
                  <Alert variant="danger" className="mx-auto mb-4" style={{ maxWidth: '500px' }}>
                    {error}
                  </Alert>
                )}
                
                <div className="resume-buttons-container">
                  <Button
                    variant="primary"
                    onClick={() => setShow(true)}
                    className="resume-action-btn view-btn"
                    disabled={!!error}
                  >
                    <FaExternalLinkAlt className="me-2" />
                    {isLoading ? 'Loading...' : 'View Resume'}
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      <Modal
        show={show}
        onHide={() => {
          setShow(false);
          if (document.fullscreenElement) {
            document.exitFullscreen().catch(console.error);
          }
        }}
        onEscapeKeyDown={() => {
          if (document.fullscreenElement) {
            document.exitFullscreen().catch(console.error);
            return false;
          }
          return true;
        }}
        size="xl"
        fullscreen={fullscreen ? true : undefined}
        className="resume-modal"
        centered
        backdrop="static"
        keyboard={!fullscreen}
      >
        <Modal.Header closeButton className="resume-modal-header">
          <Modal.Title className="text-white" style={{marginLeft: "20px", marginRight: "20px"}}>My Resume</Modal.Title>
          <div className="d-flex gap-2">
            <BsButton
              variant="outline-light"
              size="sm"
              onClick={toggleFullscreen}
              title={fullscreen ? "Exit fullscreen" : "View fullscreen"}
              className="modal-control-btn"
            >
              {fullscreen ? <AiOutlineFullscreenExit /> : <AiOutlineFullscreen />}
            </BsButton>
            <BsButton
              variant="outline-light"
              size="sm"
              onClick={downloadResume}
              title="Download resume"
              className="modal-control-btn"
              disabled={downloadStatus === 'downloading'}
            >
              {downloadStatus === 'downloading' ? (
                <Spinner as="span" animation="border" size="sm" />
              ) : (
                <AiOutlineDownload />
              )}
            </BsButton>
            <BsButton
              variant="outline-light"
              size="sm"
              onClick={() => {
                setIsLoading(true);
                const iframe = iframeRef.current;
                if (iframe) {
                  iframe.src = `${resumePath}#toolbar=0&navpanes=0&t=${Date.now()}`;
                }
              }}
              title="Reload resume"
              className="modal-control-btn"
            >
              <AiOutlineReload />
            </BsButton>
          </div>
        </Modal.Header>
        
        <Modal.Body className="p-0 position-relative resume-modal-body">
          {isLoading && (
            <div className="loading-overlay">
              <Spinner animation="border" variant="primary" />
              <span className="ms-2 text-white">Loading resume...</span>
            </div>
          )}
          
          {error && (
            <Alert variant="danger" className="m-3">
              {error} 
              <Button variant="link" onClick={downloadResume} className="p-0 ms-2">
                Download instead
              </Button>
            </Alert>
          )}
          
          <div className="pdf-viewer-container">
            <iframe
              ref={iframeRef}
              src={`${resumePath}#toolbar=0&navpanes=0&view=FitH`}
              width="100%"
              height="100%"
              title="Resume PDF"
              className="pdf-iframe"
              onLoad={handlePdfLoad}
              onError={handlePdfError}
              loading="eager"
              aria-label="Resume PDF Viewer"
              style={{ border: 'none' }}
              allowFullScreen
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
            >
              <div className="pdf-fallback">
                <p className="text-white text-center">
                  Your browser does not support embedded PDFs. 
                </p>
                <Button
                  variant="primary"
                  href={resumePath}
                  download={resumeFileName}
                  className="mx-auto d-block"
                >
                  Download the resume
                </Button>
              </div>
            </iframe>
          </div>
        </Modal.Body>
        
        <Modal.Footer className="resume-modal-footer">
          <small className="text-muted">
            Having trouble viewing? 
            <Button 
              variant="link" 
              size="sm" 
              onClick={downloadResume} 
              className="p-0 ms-1 text-decoration-none"
            >
              Download the PDF
            </Button>
          </small>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ResumeNew;