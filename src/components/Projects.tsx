const projects = [
  {
    num: "01 / 03",
    meta: "AI-ASSISTED BUILD · SHEETJS · VERCEL",
    name: "Cashbook 101",
    desc: "Multi entity cashbook web app designed for practical business logging: entity switching, transaction tracking, running balances, and fast daily use. Reduced manual bookkeeping workload by 75%.",
    url: "cashbook-101.vercel.app",
    link: "https://cashbook-101.vercel.app",
    watermark: "CASH",
  },
  {
    num: "02 / 03",
    meta: "Research Report",
    name: "HUL | DCF Valuation",
    desc: "Comprehensive equity valuation of Hindustan Unilever Limited using a detailed FCFF model. Includes dividend analysis, margin trends, and intrinsic value assessment. Supported by financial models and market analysis.",
    url: "View Full Report (PDF)",
    link: "/HUL_DCF.pdf",
    watermark: "DCF",
  },
  {
    num: "03 / 03",
    meta: "Financial Model · EXCEL",
    name: "HUL | Financial Model",
    desc: "Detailed Excel-based financial model for Hindustan Unilever Limited. Contains comprehensive analysis, projections, and valuation metrics for equity research and investment decision-making.",
    url: "Download Model (XLSX)",
    link: "/HUL_Unilever.xlsx",
    watermark: "MODEL",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header fade-in">
          <div className="section-label">§ 03 Selected Work</div>
          <div>
            <h2 className="section-heading">Built to be <em>used.</em></h2>
          </div>
        </div>

        {projects.map((p) => (
          <a
            key={p.num}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <div>
              <div className="project-number">{p.num}</div>
              <div className="project-meta">{p.meta}</div>
              <div className="project-name">{p.name}</div>
              <div className="project-desc">{p.desc}</div>
            </div>
            <div className="project-right">
              <div className="project-watermark">{p.watermark}</div>
              <div className="project-url">{p.url}</div>
              <span className="project-link">↗ {p.meta === "Research Report" ? "Read" : "Live"}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
