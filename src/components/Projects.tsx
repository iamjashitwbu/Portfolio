const projects = [
  {
    num: "01 / 02",
    meta: "Live Project",
    name: "Cashbook 101",
    desc: "Multi entity cashbook web app designed for practical business logging: entity switching, transaction tracking, running balances, and fast daily use. Reduced manual bookkeeping workload by 75%.",
    url: "cashbook-101.vercel.app",
    link: "https://cashbook-101.vercel.app",
    watermark: "CASH",
  },
  {
    num: "02 / 02",
    meta: "Research Report",
    name: "JK Tyre | DCF Valuation",
    desc: "Bottom up equity valuation of JK Tyre & Industries Ltd. using a 5 year FCFF model (FY26 to FY30) with Gordon Growth terminal value. Arrived at an intrinsic value of ₹308.56/share vs. market price of ₹399.30, flagging a 22.7% overvaluation. WACC at 9.69%, terminal value contributing ~83% of enterprise value.",
    url: "View Full Report (PDF)",
    link: "/JK_Tyres_DCF.pdf",
    watermark: "DCF",
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
