const Navbar: React.FC = () => {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "The Long Game", href: "#journey" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="flex flex-wrap items-center justify-between gap-6 py-6 border-b border-rule sticky top-0 bg-bg/80 backdrop-blur-md z-50 px-4 md:px-0">
      <div className="eyebrow text-text">Jashit / Portfolio / India</div>
      <nav className="flex flex-wrap gap-x-8 gap-y-2">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-[0.78rem] tracking-[0.12em] uppercase hover:text-accent transition-colors relative group"
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
