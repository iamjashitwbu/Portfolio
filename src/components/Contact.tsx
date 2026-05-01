import { useEffect, useState } from "react";

const Contact: React.FC = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-top">
            <div className="contact-info">
              <div className="section-label">§ 06 Contact</div>
              <div className="contact-time-label">Local Time | IST</div>
              <div className="contact-time">{time}</div>
              <div className="contact-open">
                <div className="contact-open-label">Open To</div>
                <div className="contact-open-list">
                  MBA Internships<br />
                  Equity Research Roles<br />
                  Sports Consulting
                </div>
              </div>
            </div>
            <div>
              <h2 className="contact-heading">
                Let's<br />
                <em>talk.</em>
              </h2>
            </div>
          </div>

          <a href="https://mail.google.com/mail/?view=cm&to=jashit1234@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-cta">
            <span className="contact-cta-text">Write a Note → jashit1234@gmail.com</span>
            <span className="contact-cta-arrow">→</span>
          </a>

          <div className="contact-bar">
            <div className="contact-bar-item">
              <span className="contact-bar-label">Email</span>
              <a href="https://mail.google.com/mail/?view=cm&to=jashit1234@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-bar-link">↗ Open</a>
            </div>
            <div className="contact-bar-item">
              <span className="contact-bar-label">GitHub</span>
              <a href="https://github.com/iamjashitwbu" target="_blank" rel="noreferrer" className="contact-bar-link">↗ Open</a>
            </div>
            <div className="contact-bar-item">
              <span className="contact-bar-label">Résumé</span>
              <a href="/JK_RESUME_UPDATE.pdf" target="_blank" rel="noreferrer" className="contact-bar-link">↗ View</a>
            </div>
            <div className="contact-bar-item">
              <span className="contact-bar-label">Location</span>
              <span className="contact-bar-link" style={{ cursor: "default" }}>Indore, IN</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <span>© 2026 Jashit Kale</span>
            <span>Cormorant Garamond · Manrope · JetBrains Mono</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
