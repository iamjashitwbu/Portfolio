const Journey: React.FC = () => {
  return (
    <section id="journey" className="section">
      <div className="container">
        <div className="section-header fade-in">
          <div className="section-label">§ 04 The Long Game</div>
          <div>
            <h2 className="section-heading">The arc, before the <em>office.</em></h2>
          </div>
        </div>

        <div className="journey-grid fade-in fade-in-delay-1">
          <div>
            <p className="journey-body" style={{ marginTop: 0 }}>
              Boxing was not a side chapter. For 8 years, it was the primary identity and
              the foundation everything else was built on. The run produced 2 national medals
              and 4 state medals through sustained national level preparation and competition
              at the National Boxing Academy in Rohtak.
            </p>
            <p className="journey-body">
              That same discipline, structured preparation, repeatable execution, honest
              feedback loops, carried into Sports Science, then family business operations,
              then a 98.21 percentile on CAT 2025. The arena changed; the operating system didn't.
            </p>
          </div>

          <div className="journey-stats">
            <div className="journey-stat">
              <div className="journey-stat-number">08</div>
              <div className="journey-stat-label">Years Active</div>
            </div>
            <div className="journey-stat">
              <div className="journey-stat-number">02</div>
              <div className="journey-stat-label">National Medals</div>
            </div>
            <div className="journey-stat">
              <div className="journey-stat-number">04</div>
              <div className="journey-stat-label">State Medals</div>
            </div>
            <div className="journey-stat">
              <div className="journey-stat-number">98.21</div>
              <div className="journey-stat-label">CAT Percentile</div>
            </div>
          </div>
        </div>

        <div className="journey-details fade-in fade-in-delay-2">
          <div className="journey-detail">
            <h4>National Boxing Academy, Rohtak</h4>
            <p>
              Developed inside a training structure built around roadwork, technical drilling,
              sparring, conditioning, recovery, and repeatable discipline under pressure.
            </p>
          </div>
          <div className="journey-detail">
            <h4>B.Sc. Sports Science | MDU</h4>
            <p>
              Studied performance, recovery, adaptation, and the mechanics behind repeatable
              execution with direct relevance to training and competition.
            </p>
          </div>
          <div className="journey-detail">
            <h4>Mentoring</h4>
            <p>
              Informally mentored junior boxers around training discipline, preparation,
              and performance habits.
            </p>
          </div>
          <div className="journey-detail">
            <h4>CAT 2025 | Transition Marker</h4>
            <p>
              The same discipline applied to a new arena. A transition marker from physical
              performance to systems, not an academic stat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
