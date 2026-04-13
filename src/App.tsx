import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Journey from "./components/Journey";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 md:px-12">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Journey />
        <Contact />
      </main>
    </div>
  );
}

export default App;
