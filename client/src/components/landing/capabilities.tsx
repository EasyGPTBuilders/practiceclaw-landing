import { useState } from "react";
import type { ComponentType } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Heart,
  Globe,
  Settings,
  Headphones,
  Calendar,
  Users,
  PhoneForwarded,
  ShieldCheck,
  PhoneCall,
  MessageSquare,
  Video,
  MessageCircle,
  Wrench,
  BookOpen,
  Database,
  FileText,
  Youtube,
  BarChart3,
  Radio,
  Building2,
} from "lucide-react";
import { SiWhatsapp, SiFacebook, SiGooglecalendar, SiZapier } from "react-icons/si";

interface CardData {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface SectionData {
  id: string;
  heading: string;
  highlight: string;
  subtitle: string;
  cards: CardData[];
}

interface ToolsTab {
  id: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
  cards: CardData[];
}

const sections: SectionData[] = [
  {
    id: "identity",
    heading: "Give PracticeClaw a",
    highlight: "Unique Identity",
    subtitle: "Customize how PracticeClaw represents your practice — from name and personality to language and communication style.",
    cards: [
      { icon: User, title: "Persona", description: "Custom PracticeClaw name, bio, and communication style" },
      { icon: Mail, title: "Personal Email", description: "Dedicated email address for PracticeClaw" },
      { icon: Phone, title: "Dedicated Phone Number", description: "Local or toll-free number for patient calls" },
      { icon: Heart, title: "Personality Traits", description: "Empathy levels, tone, and bedside manner settings" },
      { icon: Globe, title: "Language Settings", description: "Multi-language support with auto-translation" },
      { icon: Settings, title: "Training Settings", description: "Configure data sources and learning preferences" },
    ],
  },
  {
    id: "skills",
    heading: "Built-In",
    highlight: "Practice Cloud Skills",
    subtitle: "From answering calls to booking appointments — PracticeClaw handles the tasks that keep your front desk busy.",
    cards: [
      { icon: Headphones, title: "Receptionist", description: "Full-service virtual front desk for your practice" },
      { icon: Calendar, title: "Appointments & Scheduling", description: "Book, reschedule, and confirm appointments" },
      { icon: Users, title: "Team Handoff", description: "Seamless escalation to the right team member" },
      { icon: PhoneForwarded, title: "Answering Service", description: "After-hours and overflow call handling" },
      { icon: PhoneCall, title: "Call Routing", description: "Smart routing based on caller intent and urgency" },
      { icon: ShieldCheck, title: "Patient Screening", description: "Pre-visit screening and intake questions" },
      { icon: Phone, title: "Call Screening", description: "Filter spam and prioritize patient calls" },
    ],
  },
];

const toolsTabs: ToolsTab[] = [
  {
    id: "channels",
    label: "Communication Channels",
    icon: Radio,
    cards: [
      { icon: PhoneCall, title: "Phone Calls", description: "AI-powered inbound and outbound phone calls" },
      { icon: MessageSquare, title: "Website Chat", description: "Embeddable chat widget for your practice website" },
      { icon: Video, title: "Video Calls", description: "Browser-based video consultations" },
      { icon: MessageCircle, title: "Text Messaging", description: "SMS communication with patients" },
      { icon: SiWhatsapp, title: "WhatsApp", description: "Connect with patients on WhatsApp" },
      { icon: SiFacebook, title: "Facebook Messenger", description: "Engage patients via Facebook" },
    ],
  },
  {
    id: "practice-management",
    label: "Practice Management",
    icon: Building2,
    cards: [
      { icon: Wrench, title: "Juvonno", description: "Practice management integration" },
      { icon: Wrench, title: "Dentrix", description: "Dental practice management sync" },
      { icon: Wrench, title: "OpenDental", description: "Open-source dental software integration" },
      { icon: SiGooglecalendar, title: "Google Calendar", description: "Calendar sync and availability management" },
      { icon: SiZapier, title: "Zapier", description: "Connect to 5,000+ apps and workflows" },
    ],
  },
  {
    id: "reporting",
    label: "Reporting & Insights",
    icon: BarChart3,
    cards: [
      { icon: BarChart3, title: "Call Analytics", description: "Track call volume, duration, and outcomes in real time" },
      { icon: Users, title: "Patient Satisfaction", description: "Monitor patient feedback and sentiment scores" },
      { icon: Calendar, title: "Booking Reports", description: "Analyze appointment trends and no-show rates" },
      { icon: ShieldCheck, title: "Compliance Logs", description: "HIPAA-compliant audit trails for every interaction" },
    ],
  },
];

const trainingSection: SectionData = {
  id: "training",
  heading: "Custom PracticeClaw",
  highlight: "Training",
  subtitle: "Teach PracticeClaw everything about your practice so it can answer patient questions accurately and confidently.",
  cards: [
    { icon: BookOpen, title: "Basic Knowledge Base", description: "Upload FAQs, practice info, and procedures" },
    { icon: Database, title: "Advanced Knowledge Base", description: "Structured data with smart categorization" },
    { icon: BookOpen, title: "RAG Knowledge Base", description: "Vector embeddings for semantic search" },
    { icon: FileText, title: "MS Office Documents", description: "Import Word, Excel, and PowerPoint files" },
    { icon: Youtube, title: "YouTube Video", description: "Extract knowledge from video content" },
  ],
};

function CapabilitySection({ section, index }: { section: SectionData; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <section
      id={section.id}
      data-testid={`section-${section.id}`}
      className="relative py-20 sm:py-28"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        {!isEven && (
          <div className="absolute inset-0 bg-muted/30" />
        )}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold tracking-tight"
          >
            {section.heading}{" "}
            <span className="text-primary">{section.highlight}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            {section.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {section.cards.map((card, cardIndex) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: cardIndex * 0.06 }}
              className="rounded-md border border-border bg-card p-5 hover-elevate"
              data-testid={`card-${section.id}-${card.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <card.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ToolsSection() {
  const [activeTab, setActiveTab] = useState("channels");
  const activeContent = toolsTabs.find((t) => t.id === activeTab)!;

  return (
    <section
      id="tools"
      data-testid="section-tools"
      className="relative py-20 sm:py-28"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold tracking-tight"
          >
            PracticeClaw Works with Your{" "}
            <span className="text-primary">Existing Tools</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Seamlessly integrates with the channels, systems, and workflows your practice already uses.
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-64 flex-shrink-0">
            <div className="flex md:flex-col gap-1">
              {toolsTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  data-testid={`tab-tools-${tab.id}`}
                  className={`flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-all text-left w-full ${
                    activeTab === tab.id
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  <tab.icon className="w-4 h-4 flex-shrink-0" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.2 }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {activeContent.cards.map((card) => (
                    <div
                      key={card.title}
                      className="rounded-md border border-border bg-card p-5 hover-elevate"
                      data-testid={`card-tools-${card.title.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <card.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-base font-semibold mb-1">{card.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Capabilities() {
  return (
    <>
      {sections.map((section, index) => (
        <CapabilitySection key={section.id} section={section} index={index} />
      ))}
      <ToolsSection />
      <CapabilitySection section={trainingSection} index={sections.length + 1} />
    </>
  );
}
