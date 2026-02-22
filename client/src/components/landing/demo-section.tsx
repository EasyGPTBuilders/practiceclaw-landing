import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Copy, Check, Stethoscope, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const DEMO_PHONE = "(973) 968-4281";

export function DemoSection() {
  const [activeTab, setActiveTab] = useState<"chat" | "phone">("chat");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(DEMO_PHONE.replace(/[^0-9]/g, ""));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="demo"
      data-testid="section-demo"
      className="relative py-24 sm:py-32"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute inset-0 bg-muted/30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-primary uppercase tracking-wider mb-4"
          >
            See the magic for yourself
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold tracking-tight"
          >
            Try <span className="text-primary">PracticeClaw</span> in Action
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Chat live with our AI assistant or call our demo line — PracticeClaw is highly customizable to your practice's needs.
          </motion.p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-1 rounded-md border border-border bg-card p-1">
            <button
              onClick={() => setActiveTab("chat")}
              data-testid="tab-demo-chat"
              className={`flex items-center gap-2 px-5 py-2.5 rounded-sm text-sm font-medium transition-all ${
                activeTab === "chat"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              AI Live Chat
            </button>
            <button
              onClick={() => setActiveTab("phone")}
              data-testid="tab-demo-phone"
              className={`flex items-center gap-2 px-5 py-2.5 rounded-sm text-sm font-medium transition-all ${
                activeTab === "phone"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Phone className="w-4 h-4" />
              AI Receptionist
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "chat" ? (
            <motion.div
              key="chat"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="max-w-4xl mx-auto"
            >
              <div className="rounded-md border border-border bg-card p-1">
                <div className="flex items-center gap-2 px-3 py-2 border-b border-border">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-destructive/60" />
                    <div className="w-3 h-3 rounded-full bg-chart-4/60" />
                    <div className="w-3 h-3 rounded-full bg-chart-5/60" />
                  </div>
                  <span className="text-xs text-muted-foreground font-mono ml-2">AI Live Chat Demo</span>
                </div>
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    src="https://www.practiceclaw.com/w/cmlwphm380000ri5atwtksfze"
                    title="PracticeClaw Live Chat Demo"
                    className="absolute inset-0 w-full h-full rounded-b-md"
                    allow="microphone"
                    data-testid="iframe-demo"
                  />
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="phone"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="max-w-4xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight mb-4">
                    Call our demo line and talk to{" "}
                    <span className="text-primary">PracticeClaw</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Our demo is connected to a real Open Dental database. Experience how PracticeClaw handles patient calls, books appointments, and answers questions — just like it would for your practice.
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
                </div>

                <div className="rounded-md border border-border bg-card overflow-hidden">
                  <div className="px-6 py-5 border-b border-border">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
                          <Stethoscope className="w-4 h-4 text-primary-foreground" />
                        </div>
                        <span className="font-semibold text-sm">PracticeClaw</span>
                      </div>
                      <div className="text-xs text-muted-foreground text-right">
                        Call now
                        <br />
                        <span className="font-medium text-foreground">{DEMO_PHONE}</span>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 py-8 flex flex-col items-center text-center">
                    <h4 className="text-xl font-bold text-primary mb-6" data-testid="text-demo-title">
                      The AI Practice Receptionist
                    </h4>

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
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
