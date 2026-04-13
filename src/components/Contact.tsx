import Section from "./Section";
import { Mail, MapPin } from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Contact: React.FC = () => {
  return (
    <>
      <Section id="certifications" title="Certifications">
        <ul className="space-y-6">
          <li className="group">
            <h3 className="text-xl font-bold group-hover:text-accent transition-colors">CFI Strategic Problem Solving</h3>
            <p className="eyebrow text-muted mt-1">Corporate Finance Institute</p>
          </li>
          <li className="group">
            <h3 className="text-xl font-bold group-hover:text-accent transition-colors">Anthropic Claude 101</h3>
            <p className="eyebrow text-muted mt-1">Prompt Engineering & Applied AI Workflows</p>
          </li>
        </ul>
      </Section>

      <Section id="contact" title="Contact">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center gap-4 group">
              <div className="p-3 border border-rule group-hover:border-accent transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="eyebrow text-[0.7rem] mb-1">Email</div>
                <a href="mailto:jashit1234@gmail.com" className="text-lg hover:text-accent transition-colors">
                  jashit1234@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="p-3 border border-rule group-hover:border-accent transition-colors">
                <GithubIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="eyebrow text-[0.7rem] mb-1">GitHub</div>
                <a href="https://github.com/iamjashitwbu" target="_blank" rel="noreferrer" className="text-lg hover:text-accent transition-colors">
                  github.com/iamjashitwbu
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-4 group">
              <div className="p-3 border border-rule group-hover:border-accent transition-colors">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="eyebrow text-[0.7rem] mb-1">Location</div>
                <div className="text-lg">Indore, India</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <footer className="py-12 border-t border-rule mt-12">
        <div className="flex items-baseline gap-2">
          <span className="text-accent font-sans font-bold uppercase tracking-wider">Jashit</span>
          <span className="text-muted/40">/</span>
          <span className="text-muted text-sm">Finance. Performance. Systems.</span>
        </div>
        <div className="mt-4 text-muted/60 text-[0.75rem]">
          Jashit © 2026
        </div>
      </footer>
    </>
  );
};

export default Contact;
