import { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Users, CalendarCheck, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LeadCaptureModal } from "./lead-capture-modal";
import { CalendlyModal } from "./calendly-modal";

const pricingItems = [
  {
    price: "$1",
    label: "Per Conversation",
    icon: MessageSquare,
    description: "AI-handled patient interactions across all channels",
  },
  {
    price: "$5",
    label: "Per Team Handoff",
    icon: Users,
    description: "Seamless escalation to your staff when needed",
  },
  {
    price: "$10",
    label: "Per Booked Appointment",
    icon: CalendarCheck,
    description: "Appointments confirmed directly in your PMS",
  },
];

const bulletPoints = [
  "Free 20 Conversations",
  "No Monthly Subscription",
  "Cancel Anytime",
  "No Credit Card Required",
];

export function Pricing() {
  const [leadOpen, setLeadOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section
      id="compensation"
      data-testid="section-pricing"
      className="relative py-24 sm:py-32"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Pricing
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
              Simple, Performance-Based Pricing
            </h2>

            <ul className="mt-8 space-y-3">
              {bulletPoints.map((point) => (
                <li key={point} className="flex items-center gap-2.5 text-sm">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {pricingItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-md border border-border bg-card p-6 flex items-center gap-5"
                data-testid={`card-pricing-${index}`}
              >
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="text-3xl font-bold tracking-tight">{item.price}</span>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-1">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            ))}

            <div className="flex items-center gap-3 pt-2">
              <Button size="lg" data-testid="button-pricing-start" onClick={() => setLeadOpen(true)}>
                Build your PracticeClaw for free
              </Button>
              <Button size="lg" variant="ghost" data-testid="button-pricing-demo" onClick={() => setDemoOpen(true)}>
                Schedule a demo
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <LeadCaptureModal open={leadOpen} onClose={() => setLeadOpen(false)} />
      <CalendlyModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </section>
  );
}
