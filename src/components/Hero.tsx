import profileImg from "../assets/jashit.jpg";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-meta">
          <span>Portfolio</span>
          <span>Issue 01 | Finance × Performance</span>
          <span>Indore, India</span>
        </div>

        <div className="hero-grid">
          <div>
            <h1 className="hero-name">
              Jashit<br />
              <span className="green">Kale.</span>
            </h1>
            <p className="hero-subtitle">Finance. Performance. Systems.</p>

            <div className="hero-status">
              <span className="dot" />
              <span>Incoming MBA</span>
            </div>

            <div className="hero-buttons">
              <a href="#projects" className="btn-primary" onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}>
                See the Work →
              </a>
              <a href="/JK_RESUME_UPDATE.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline">
                Read Résumé
              </a>
            </div>
          </div>

          <div className="hero-image">
            <div className="hero-image-clip">
              <img src={profileImg} alt="Jashit Kale" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
