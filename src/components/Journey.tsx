import React from "react";
import Section from "./Section";
import Card from "./Card";

const Journey: React.FC = () => {
  const journeys = [
    {
      title: "National-Level Boxing | 8-Year Commitment",
      subtitle: "Competitive Boxing / 8 Years Active",
      content: "Boxing was the central discipline for 8 years of active competition, not an extracurricular line item. The run produced 2 national medals and 4 state medals through sustained national-level preparation and competition."
    },
    {
      title: "National Boxing Academy, Rohtak",
      subtitle: "Training Base / Regime",
      content: "Developed at the National Boxing Academy in Rohtak inside a training structure built around roadwork, technical drilling, sparring, conditioning, recovery, and repeatable discipline under pressure."
    },
    {
      title: "B.Sc. Sports Science, Maharshi Dayanand University",
      subtitle: "Academic Foundation",
      content: "Studied performance, recovery, adaptation, and the mechanics behind repeatable execution with direct relevance to training and competition."
    },
    {
      title: "Mentoring",
      subtitle: "Informal Coaching",
      content: "Informally mentored junior boxers around training discipline, preparation, and performance habits."
    },
    {
      title: "CAT 2025 | 98.21 Percentile",
      subtitle: "Transition Marker",
      content: "The same discipline applied to a new arena. A transition marker from physical performance to systems, not an academic stat."
    }
  ];

  return (
    <Section id="journey" title="The Long Game">
      <div className="space-y-12">
        {journeys.map((item, index) => (
          <Card key={index} title={item.title} meta={item.subtitle}>
            <p className="text-muted">{item.content}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Journey;
