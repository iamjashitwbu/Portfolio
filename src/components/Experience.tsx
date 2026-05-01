const Experience: React.FC = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header fade-in">
          <div className="section-label">§ 02 Experience</div>
          <div>
            <h2 className="section-heading">Ledger of <em>work.</em></h2>
          </div>
        </div>

        <div className="fade-in fade-in-delay-1">
          <div className="exp-entry">
            <div className="exp-date">
              Oct 2024 to Present
              <span className="country">India</span>
            </div>
            <div>
              <div className="exp-company">Archananant Enterprises | AVS Inc.</div>
              <div className="exp-role">Finance + Operations</div>
            </div>
            <ul className="exp-bullets">
            <li>Maintained bookkeeping discipline and improved day level visibility into cash movement.</li>
            <li>Managed P&L tracking to keep operating decisions tied to actual business performance.</li>
            <li>Handled quotation and invoice operations across routine commercial workflows.</li>
            <li>Implemented a multi entity cashbook enabled with bank statement and invoice parsing with no duplication and smart content extraction.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
