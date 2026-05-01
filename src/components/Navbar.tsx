import { useState } from "react";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "The Long Game", href: "#journey" },
    { name: "Contact", href: "#contact" },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#" className="navbar-brand">Jashit.</a>

        <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>

        <nav className={`navbar-links ${open ? "open" : ""}`}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={(e) => handleClick(e, link.href)}>
              {link.name}
            </a>
          ))}
        </nav>

        <div className={`nav-cta-wrap ${open ? "open" : ""}`}>
          <a href="#contact" className="nav-cta" onClick={(e) => handleClick(e, "#contact")}>
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
