import React from "react";
import Section from "./Section";
import Card from "./Card";

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Experience">
      <Card
        title="Archananant Enterprises | AVS Incorporated"
        subtitle="Finance + Operations / India"
        meta="Current"
      >
        <p className="mb-4">
          Running day-to-day financial and operating workflows with a bias toward cleaner 
          reporting, tighter controls, and lower friction in execution.
        </p>
        <ul className="list-disc list-outside pl-5 space-y-2 text-muted">
          <li>Maintained bookkeeping discipline and improved day-level visibility into cash movement.</li>
          <li>Managed P&L tracking to keep operating decisions tied to actual business performance.</li>
          <li>Handled quotation and invoice operations across routine commercial workflows.</li>
          <li>
            Implemented an SMS-based automated cashbook system to reduce manual logging lag 
            and make recordkeeping usable in real operating conditions.
          </li>
        </ul>
      </Card>
    </Section>
  );
};

export default Experience;
