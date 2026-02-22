import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { CalendlyModal } from "./calendly-modal";
import { LeadCaptureModal } from "./lead-capture-modal";

export function CTA() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [leadOpen, setLeadOpen] = useState(false);
  return (
    <section
      data-testid="section-cta"
      className="relative py-24 sm:py-32"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
        >
          Ready to Transform Your
          <br />
          <span className="text-primary">Patient Experience?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
        >
          Join hundreds of healthcare practices that never miss a patient call.
          Set up in minutes, see results from day one.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
            <Button size="lg" data-testid="button-cta-get-started" onClick={() => setLeadOpen(true)}>
              Build your PracticeClaw for free
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          <Button size="lg" variant="outline" data-testid="button-cta-demo" onClick={() => setDemoOpen(true)}>
            <Calendar className="w-4 h-4 mr-2" />
            Book a Demo
          </Button>
        </motion.div>

        <CalendlyModal open={demoOpen} onClose={() => setDemoOpen(false)} />
        <LeadCaptureModal open={leadOpen} onClose={() => setLeadOpen(false)} />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground flex-wrap"
        >
          <span>No Credit Card Required</span>
          <span className="hidden sm:inline text-border">|</span>
          <span>300+ EMR Integrations</span>
          <span className="hidden sm:inline text-border">|</span>
          <span>HIPAA Compliant</span>
        </motion.div>
      </div>
    </section>
  );
}
