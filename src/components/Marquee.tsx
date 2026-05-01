const Marquee: React.FC = () => {
  const text = "Equity · Boxing · Structure · Systems · Performance · ";
  return (
    <div className="marquee">
      <div className="marquee-track">
        <span className="marquee-text">{text}</span>
        <span className="marquee-text">{text}</span>
        <span className="marquee-text">{text}</span>
        <span className="marquee-text">{text}</span>
      </div>
    </div>
  );
};

export default Marquee;
