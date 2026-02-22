import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Copy, Check, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";

const DEMO_PHONE = "(973) 968-4281";

export function PhoneDemo() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(DEMO_PHONE.replace(/[^0-9]/g, ""));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="phone-demo"
      data-testid="section-phone-demo"
      className="relative py-24 sm:py-32"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute inset-0 bg-muted/30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              See the magic for yourself
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Call our demo line or watch{" "}
              <span className="text-primary">PracticeClaw in action</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Keep in mind that this is only a demo office and PracticeClaw is highly customizable to your practice's needs. Our demo is connected to a real Open Dental database.
            </p>

            <div className="inline-flex items-center gap-3 rounded-md border border-border bg-card px-5 py-4">
              <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-green-500" />
              </div>
              <span className="text-xl sm:text-2xl font-bold tracking-tight" data-testid="text-demo-phone">
                {DEMO_PHONE}
              </span>
              <Button
                size="icon"
                variant="ghost"
                onClick={handleCopy}
                data-testid="button-copy-phone"
                className="ml-1"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-md border border-border bg-card overflow-hidden">
              <div className="px-6 py-5 border-b border-border">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
                      <Stethoscope className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="font-semibold text-sm">PracticeClaw</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Call PracticeClaw on your own
                    <br />
                    <span className="font-medium text-foreground">{DEMO_PHONE}</span>
                  </div>
                </div>
              </div>

              <div className="px-6 py-8 flex flex-col items-center text-center">
                <h3 className="text-xl font-bold text-primary mb-6" data-testid="text-demo-title">
                  The AI Practice Receptionist
                </h3>

                <div className="w-full max-w-sm mb-6">
                  <div className="flex items-center justify-center gap-[3px] h-12">
                    {Array.from({ length: 40 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-[3px] rounded-full bg-primary/40"
                        animate={{
                          height: [
                            8 + Math.random() * 8,
                            12 + Math.random() * 28,
                            8 + Math.random() * 8,
                          ],
                        }}
                        transition={{
                          duration: 1.2 + Math.random() * 0.8,
                          repeat: Infinity,
                          repeatType: "reverse",
                          delay: Math.random() * 0.5,
                        }}
                      />
                    ))}
                  </div>
                </div>

                <p className="text-muted-foreground text-sm">
                  How can I help you?
                </p>
              </div>

              <div className="px-6 py-4 border-t border-border bg-muted/30 flex items-center justify-between">
                <span className="text-sm font-semibold">Try the Live Demo</span>
                <a
                  href={`tel:${DEMO_PHONE.replace(/[^0-9]/g, "")}`}
                  data-testid="button-call-demo"
                >
                  <Button size="sm" variant="outline" className="gap-2">
                    <Phone className="w-3.5 h-3.5" />
                    Call Now
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
