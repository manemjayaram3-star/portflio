import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack Developer (AI/ML)</h4>
                <h5>Spectraforce Technologies</h5>
              </div>
              <h3>2024 - Present</h3>
            </div>
            <p>
              Design, develop, and deploy scalable web and mobile applications using Flutter, React.js, and Django. Built AI/ML-powered real-time features, ERP and staffing modules, and managed server deployment to ensure scalability and reliability.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack Developer</h4>
                <h5>HBIC Solutions</h5>
              </div>
              <h3>2023 - 2024</h3>
            </div>
            <p>
              Developed, deployed, and maintained web and mobile applications across front-end and back-end stacks using Flutter, React.js, Django, and PostgreSQL. Delivered comprehensive solutions with seamless integration of multiple technologies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Full-Stack Developer</h4>
                <h5>Independent</h5>
              </div>
              <h3>2022 - Present</h3>
            </div>
            <p>
              Independently designed, developed, and deployed 40+ live applications across mobility, healthcare, e-commerce, education, staffing, and consumer-services domains. Built complete products end-to-end handling client requirements through to live release.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
