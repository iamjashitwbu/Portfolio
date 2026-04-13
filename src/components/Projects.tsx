import React from "react";
import Section from "./Section";
import Card from "./Card";

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Projects">
      <div className="space-y-12">
        <Card
          title="Cashbook-101"
          subtitle="Multi-entity cashbook web app designed for practical business logging: entity switching, transaction tracking, running balances, and fast daily use."
          meta="Live Project"
          link="https://cashbook-101.vercel.app"
        >
          <span className="text-accent text-sm font-medium">cashbook-101.vercel.app</span>
        </Card>
        
        <Card
          title="DCF Valuation Wizard"
          subtitle="Deployed valuation workflow focused on turning forecasting assumptions into a cleaner discounted cash flow process with usable output."
          meta="Live Project"
          link="https://valuation-wizard-gd71.vercel.app"
        >
          <span className="text-accent text-sm font-medium">valuation-wizard-gd71.vercel.app</span>
        </Card>
      </div>
    </Section>
  );
};

export default Projects;
