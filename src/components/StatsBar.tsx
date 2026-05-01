const StatsBar: React.FC = () => {
  const stats = [
    { label: "Based In", value: "Indore, IN" },
    { label: "Discipline", value: "Finance × Ops" },
    { label: "Background", value: "8-Yr Boxer" },
    { label: "Status", value: "Incoming MBA" },
  ];

  return (
    <div className="stats-bar">
      <div className="container">
        <div className="stats-bar-inner">
          {stats.map((s) => (
            <div key={s.label} className="stat-item">
              <div className="stat-label">{s.label}</div>
              <div className="stat-value">{s.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
