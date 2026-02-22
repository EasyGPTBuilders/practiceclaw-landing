import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap, ShieldCheck, CreditCard, MessageSquare, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendlyModal } from "./calendly-modal";
import { LeadCaptureModal } from "./lead-capture-modal";

const rotatingWords = ["Your Patients", "Your Staff", "Your Bottom Line"];

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [demoOpen, setDemoOpen] = useState(false);
  const [leadOpen, setLeadOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      data-testid="section-hero"
      className="relative min-h-screen flex items-center justify-center pt-16"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="secondary" className="mb-6">
              <Zap className="w-3 h-3 mr-1" />
              OpenClaw for Healthcare
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight max-w-4xl leading-[1.1]"
          >
            AI That Works for{" "}
            <span className="relative inline-block min-w-[280px] sm:min-w-[340px] text-left">
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingWords[wordIndex]}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="text-primary inline-block"
                  data-testid="text-rotating-word"
                >
                  {rotatingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            Generate a PracticeClaw customized for your practice using AI with a unique identity that knows your practice, works alongside your staff and fully integrated with your PMS. Never miss a patient call, convert up to 40% more website visitors and book appointments 24/7.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center gap-3"
          >
            <Button size="lg" className="text-base px-8 py-6" data-testid="button-build-free" onClick={() => setLeadOpen(true)}>
              Build your PracticeClaw for free
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 py-6" data-testid="button-book-demo" onClick={() => setDemoOpen(true)}>
              <Calendar className="w-4 h-4 mr-2" />
              Book a Demo
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-muted-foreground"
            data-testid="trust-badges"
          >
            <span className="flex items-center gap-1.5">
              <MessageSquare className="w-4 h-4 text-primary" />
              Free 20 conversations
            </span>
            <span className="flex items-center gap-1.5">
              <CreditCard className="w-4 h-4 text-primary" />
              No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-primary" />
              HIPAA compliant
            </span>
          </motion.div>

          <CalendlyModal open={demoOpen} onClose={() => setDemoOpen(false)} />
          <LeadCaptureModal open={leadOpen} onClose={() => setLeadOpen(false)} />
        </div>
      </div>
    </section>
  );
}
