const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header fade-in">
          <div className="section-label">§ 01 About</div>
          <div>
            <h2 className="section-heading">The operating <em>thesis.</em></h2>
          </div>
        </div>

        <div className="fade-in fade-in-delay-1">
          <p className="about-pullquote">
            "Performance failures are design failures."
          </p>
        </div>

        <div className="about-columns fade-in fade-in-delay-2">
          <p>
            For 8 years I trained and competed as a boxer, with the National Boxing Academy
            in Rohtak as a major base, and won 2 national medals and 4 state medals. That
            period shaped how I think more than any classroom could. In boxing, bad outcomes
            rarely stay mysterious for long. Missed weight, poor recovery, weak round
            management, broken conditioning, all of it can usually be traced back to flawed
            preparation, flawed structure, or flawed decision making.
          </p>
          <p>
            That lens carried into Sports Science, then into the operating core of my family
            business, and now into finance self study. I currently manage finance and operations
            inside an electro medical equipment business in India. The work is practical:
            bookkeeping, P&L visibility, quotations, invoicing, cash tracking, and making sure
            the business runs without friction.
          </p>
        </div>

        <p className="about-full fade-in fade-in-delay-3">
          I am now building deliberately toward equity research and, over the longer arc,
          sports consulting grounded in evidence rather than slogans. Core thesis: fix the
          structure, and performance follows.
        </p>
      </div>
    </section>
  );
};

export default About;
