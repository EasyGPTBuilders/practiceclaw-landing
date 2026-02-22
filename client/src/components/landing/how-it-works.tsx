import { motion } from "framer-motion";
import { UserPlus, Settings, MessageCircle, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Create Your Agent",
    description:
      "Set up PracticeClaw with a name, personality, and communication style that matches your practice's brand.",
    code: "Identity > About > Set name, bio & personality",
  },
  {
    icon: Settings,
    step: "02",
    title: "Connect Your Channels",
    description:
      "Enable the communication channels your patients use — website chat, phone, SMS, WhatsApp, or Facebook Messenger.",
    code: "Skills > Enable Website Chat, Phone, SMS...",
  },
  {
    icon: MessageCircle,
    step: "03",
    title: "Train with Your Data",
    description:
      "Upload practice information, FAQs, and procedures. The AI learns your specific workflows and appointment types.",
    code: "Education > Sources > Upload practice content",
  },
  {
    icon: TrendingUp,
    step: "04",
    title: "Go Live & Optimize",
    description:
      "Deploy to your website and phone lines. Monitor conversations, refine responses, and watch your front desk workload decrease.",
    code: "Tools > Deploy > Launch to production",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      data-testid="section-how-it-works"
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
            Live in{" "}
            <span className="text-primary">Minutes, Not Months</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            From setup to taking your first AI-handled patient call in four simple steps.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              <div className="rounded-md border border-border bg-card p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-primary uppercase tracking-wider">
                      Step {step.step}
                    </span>
                    <h3 className="text-xl font-semibold mt-1" data-testid={`text-step-${step.step}`}>
                      {step.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {step.description}
                </p>
                <div className="rounded-md bg-background border border-border px-4 py-3 font-mono text-sm text-muted-foreground">
                  {step.code}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
