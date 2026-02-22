import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Dr. Sarah Chen",
    handle: "Dental Practice Owner",
    text: "PracticeClaw cut our missed calls by 90%. Patients love being able to book at midnight, and my front desk team finally has time to focus on in-office care instead of answering phones all day.",
  },
  {
    name: "Michael Torres",
    handle: "Practice Manager",
    text: "We went from 3 receptionists to 1 plus PracticeClaw. The AI handles after-hours, weekends, and overflow calls seamlessly. ROI was positive within the first month.",
  },
  {
    name: "Dr. Emily Watson",
    handle: "Multi-Location Clinic",
    text: "Managing patient communication across 4 locations was a nightmare. Now PracticeClaw handles all of them with location-specific knowledge. It even speaks Spanish for our bilingual patients.",
  },
  {
    name: "James Park",
    handle: "Orthodontics Group",
    text: "The Keragon MCP integration with our practice management system is flawless. Appointments sync instantly, patient records stay up to date, and the whole thing just works.",
  },
  {
    name: "Dr. Lisa Patel",
    handle: "Dermatology Clinic",
    text: "I was skeptical about AI answering patient calls, but the team escalation feature gives me peace of mind. Complex medical questions always get routed to our nurses.",
  },
  {
    name: "Robert Kim",
    handle: "Operations Director",
    text: "Setup took 20 minutes. We uploaded our FAQ document, connected our phone system, and were live. The knowledge base keeps getting smarter with every patient interaction.",
  },
  {
    name: "Dr. Amanda Foster",
    handle: "Family Medicine",
    text: "Our no-show rate dropped from 18% to 7% thanks to automated reminders. The WhatsApp integration is a game-changer for reaching younger patients.",
  },
  {
    name: "David Chen",
    handle: "Physical Therapy Center",
    text: "PracticeClaw handles our intake forms, appointment scheduling, and insurance verification questions. My team can finally focus on what they were hired to do.",
  },
  {
    name: "Dr. Rachel Nguyen",
    handle: "Pediatric Dentistry",
    text: "Parents can schedule their kids' appointments via text at 10pm. That convenience alone has brought us dozens of new families this quarter.",
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

const colors = [
  "bg-primary/80",
  "bg-chart-2/80",
  "bg-chart-3/80",
  "bg-chart-4/80",
  "bg-chart-5/80",
];

export function Testimonials() {
  return (
    <section
      id="community"
      data-testid="section-community"
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
            Trusted by{" "}
            <span className="text-primary">Healthcare Practices</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Practices across the country are transforming their patient communication with PracticeClaw.
          </motion.p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="break-inside-avoid rounded-md border border-border bg-card p-5"
              data-testid={`card-testimonial-${index}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <Avatar className="w-9 h-9">
                  <AvatarFallback
                    className={`text-xs text-white ${colors[index % colors.length]}`}
                  >
                    {getInitials(testimonial.name)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {testimonial.handle}
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
