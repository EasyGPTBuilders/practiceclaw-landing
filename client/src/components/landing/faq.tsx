import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does PracticeClaw handle patient calls?",
    answer: "PracticeClaw uses advanced AI to answer inbound patient calls 24/7. It can schedule appointments, answer common questions about your practice, handle prescription refill requests, and seamlessly hand off complex issues to your staff — all while maintaining a natural, empathetic conversation.",
  },
  {
    question: "Is PracticeClaw HIPAA compliant?",
    answer: "Yes, PracticeClaw is fully HIPAA compliant. All patient data is encrypted in transit and at rest. We provide comprehensive audit trails for every interaction, and our platform undergoes regular security assessments to ensure the highest level of data protection.",
  },
  {
    question: "What practice management systems does PracticeClaw integrate with?",
    answer: "PracticeClaw integrates with 300+ EMR and practice management systems through Keragon MCP, including Open Dental, Dentrix, Juvonno, and many more. We also support Google Calendar, Zapier, and custom integrations to fit your existing workflow.",
  },
  {
    question: "How long does it take to set up PracticeClaw?",
    answer: "Most practices are up and running within minutes. Our guided setup walks you through customizing PracticeClaw's identity, connecting your practice management system, and training it on your specific procedures and FAQs. No technical expertise required.",
  },
  {
    question: "What happens when PracticeClaw can't handle a request?",
    answer: "PracticeClaw intelligently recognizes when a conversation needs human attention and performs a seamless team handoff. Your staff receives full context of the conversation so patients never have to repeat themselves. You only pay $5 per handoff.",
  },
  {
    question: "Can I customize how PracticeClaw sounds and communicates?",
    answer: "Absolutely. You can customize PracticeClaw's name, personality traits, empathy levels, tone, and communication style. It supports multiple languages with auto-translation, so it can serve your diverse patient population naturally.",
  },
  {
    question: "Do I need to sign a long-term contract?",
    answer: "No. PracticeClaw uses simple, performance-based pricing with no monthly subscription and no long-term commitment. You only pay for what you use — $1 per conversation, $5 per team handoff, and $10 per booked appointment. Cancel anytime.",
  },
  {
    question: "How does the free trial work?",
    answer: "You get 20 free conversations to try PracticeClaw with no credit card required. Build your customized PracticeClaw, connect it to your practice, and see results before you pay anything. After your free conversations, you simply pay per interaction.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      data-testid="section-faq"
      className="relative py-24 sm:py-32"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute inset-0 bg-muted/30" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold tracking-tight"
          >
            Frequently Asked <span className="text-primary">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Everything you need to know about PracticeClaw
          </motion.p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-md border border-border bg-card overflow-hidden"
              data-testid={`faq-item-${index}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
                data-testid={`faq-toggle-${index}`}
              >
                <span className="font-medium text-sm pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 flex-shrink-0 text-muted-foreground transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
