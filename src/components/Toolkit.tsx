const toolkitData = [
  {
    title: "Finance",
    count: "04 Skills",
    items: ["Bookkeeping & Cash Tracking", "P&L Analysis", "DCF Valuation", "Equity Research"],
  },
  {
    title: "Operations",
    count: "03 Skills",
    items: ["Business Process Design", "Invoicing & Quotations", "Vendor Management"],
  },
  {
    title: "Technical",
    count: "04 Skills",
    items: ["AI-ASSISTED DEVELOPMENT", "PROMPT ENGINEERING", "EXCEL & SHEETS", "NO-CODE / LOW-CODE TOOLS"],
  },
  {
    title: "AI Tools",
    count: "03 Skills",
    items: ["Claude / Prompt Engineering", "AI-Assisted Development", "Workflow Automation"],
  },
];

const certs = [
  { name: "Bloomberg Market Concepts", issuer: "Bloomberg LP" },
  { name: "CFI Strategic Problem Solving", issuer: "Corporate Finance Institute" },
  { name: "Anthropic Claude 101", issuer: "Prompt Engineering & Applied AI" },
];

const Toolkit: React.FC = () => {
  return (
    <section id="toolkit" className="section">
      <div className="container">
        <div className="section-header fade-in">
          <div className="section-label">§ 05 Toolkit</div>
          <div>
            <h2 className="section-heading">What I bring to the <em>desk.</em></h2>
          </div>
        </div>

        <div className="toolkit-grid fade-in fade-in-delay-1">
          {toolkitData.map((cat) => (
            <div key={cat.title} className="toolkit-category">
              <h4>{cat.title}</h4>
              <div className="toolkit-count">{cat.count}</div>
              <div className="toolkit-list">
                {cat.items.map((item) => (
                  <div key={item} className="toolkit-item">{item}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="fade-in fade-in-delay-1" style={{ textAlign: "center", marginTop: "3rem", color: "var(--muted)", fontFamily: "'Manrope', sans-serif", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
          TOOLS DEPLOYED VIA AI-ASSISTED WORKFLOWS · OUTPUTS ARE FUNCTIONAL AND LIVE
        </div>

        <div className="cert-grid fade-in fade-in-delay-2">
          {certs.map((c) => (
            <div key={c.name} className="cert-item">
              <span className="cert-check">✓</span>
              <div>
                <div className="cert-name">{c.name}</div>
                <div className="cert-issuer">{c.issuer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Toolkit;
