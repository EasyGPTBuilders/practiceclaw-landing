import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { User, MessageSquare, BookOpen, Wrench } from "lucide-react";
import identityImg from "@assets/image_1771762610130.png";
import skillsImg from "@assets/image_1771762672895.png";
import educationImg from "@assets/image_1771762779355.png";
import toolsImg from "@assets/image_1771762737040.png";

const sections = [
  {
    id: "identity",
    icon: User,
    tag: "Identity",
    title: "Give PracticeClaw a Personality",
    description:
      "Create a named PracticeClaw with a custom bio, communication tone, and personality traits. Configure language settings, training data sources, and how PracticeClaw presents itself to patients. Fully customizable to match your practice's brand and bedside manner.",
    image: identityImg,
    features: [
      "Custom agent name & bio",
      "Personality traits & empathy levels",
      "Multi-language support with auto-translation",
      "Training data source configuration",
    ],
  },
  {
    id: "skills",
    icon: MessageSquare,
    tag: "Skills",
    title: "Multi-Channel Patient Communication",
    description:
      "Deploy your AI across website chat, browser calls, phone, SMS, contact forms, WhatsApp, and Facebook Messenger. Each channel is independently configurable with its own AI model, welcome messages, and agent instructions. Enable team member takeover for seamless human escalation.",
    image: skillsImg,
    features: [
      "Website chat, phone, SMS & WhatsApp",
      "Team member takeover capability",
      "Custom welcome messages per channel",
      "Claude 3.5 Sonnet & more AI models",
    ],
  },
  {
    id: "education",
    icon: BookOpen,
    tag: "Education",
    title: "Train PracticeClaw with Practice Knowledge",
    description:
      "Build a knowledge base from your practice's content. Smart updates keep PracticeClaw current, while RAG integration with vector embeddings enables semantic search across your documents. PracticeClaw gets smarter with every interaction and content update.",
    image: educationImg,
    features: [
      "Primary knowledge base with smart updates",
      "RAG integration with vector search",
      "Automatic web content crawling",
      "Content summary & analytics",
    ],
  },
  {
    id: "tools",
    icon: Wrench,
    tag: "Tools",
    title: "300+ Healthcare Integrations via MCP",
    description:
      "Connect to your existing practice management systems through Keragon's MCP protocol. Integrate with Juvonno, NexHealth, Athenahealth, ModMed, Healthie, and hundreds more. Manage appointments, scheduling, website deployment, and Google Business Profile — all from one platform.",
    image: toolsImg,
    features: [
      "Juvonno, NexHealth & Keragon MCP",
      "Appointments & scheduling management",
      "Website & landing page deployment",
      "Google Business Profile integration",
    ],
  },
];

export function Platform() {
  return (
    <section
      id="platform"
      data-testid="section-platform"
      className="relative py-24 sm:py-32"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold tracking-tight"
          >
            Everything Your Practice Needs,{" "}
            <span className="text-primary">One Platform</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Configure PracticeClaw's identity, communication channels, knowledge base, and integrations — all in one place.
          </motion.p>
        </div>

        <div className="space-y-24">
          {sections.map((section, index) => {
            const isReversed = index % 2 === 1;

            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col ${
                  isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center gap-10 lg:gap-16`}
              >
                <div className="flex-1 w-full lg:w-auto">
                  <div className="flex items-center gap-2 mb-4 flex-wrap">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                      <section.icon className="w-5 h-5 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {section.tag}
                    </Badge>
                  </div>

                  <h3
                    className="text-2xl sm:text-3xl font-bold tracking-tight mb-4"
                    data-testid={`text-platform-${section.id}`}
                  >
                    {section.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {section.description}
                  </p>

                  <ul className="space-y-3">
                    {section.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm"
                      >
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex-1 w-full lg:w-auto">
                  <div className="rounded-md border border-border bg-card p-2">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full rounded-sm"
                      data-testid={`img-platform-${section.id}`}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
