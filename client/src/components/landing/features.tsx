import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  Cpu,
  MessageSquare,
  Brain,
  Puzzle,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Cpu,
    title: "Runs Locally",
    description:
      "Your data stays on your hardware. No cloud dependency means complete privacy and control over your personal AI assistant.",
  },
  {
    icon: Clock,
    title: "Always On, 24/7",
    description:
      "Unlike chat-based AI, OpenClaw is proactive. It runs background tasks, cron jobs, and monitors your systems around the clock.",
  },
  {
    icon: MessageSquare,
    title: "Chat Interface",
    description:
      "Control everything through WhatsApp, Telegram, or Discord. No new apps to learn — just message your AI like a coworker.",
  },
  {
    icon: Brain,
    title: "Persistent Memory",
    description:
      "Context that persists across sessions. OpenClaw remembers your preferences, past conversations, and learns how you work.",
  },
  {
    icon: Puzzle,
    title: "Community Skills",
    description:
      "Extend capabilities with community-built skills. From email management to home automation — the ecosystem keeps growing.",
  },
  {
    icon: Shield,
    title: "Open Source",
    description:
      "Fully transparent codebase. Audit the code, contribute features, and trust that your AI assistant has no hidden agendas.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Features() {
  return (
    <section
      id="features"
      data-testid="section-features"
      className="relative py-24 sm:py-32"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold tracking-tight"
          >
            Built for the Future of{" "}
            <span className="text-primary">Personal AI</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Everything you need to run a truly autonomous AI assistant that works for you, not a corporation.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={itemVariants}>
              <Card className="h-full hover-elevate border-card-border">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2" data-testid={`text-feature-${feature.title.toLowerCase().replace(/\s/g, "-")}`}>
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
