import { motion } from "framer-motion";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { Stethoscope, Target, Lightbulb, Shield } from "lucide-react";
import founderImage from "@assets/WanekLinkedIn1_1771794622380.png";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24 pb-16">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl font-bold tracking-tight mb-4"
              data-testid="text-about-heading"
            >
              About <span className="text-primary">PracticeClaw</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              AI-powered patient communication for healthcare practices. We handle the front desk so your team can focus on patient care.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-16"
          >
            <div id="mission" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold" data-testid="text-about-mission">Our Mission</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  At PracticeClaw, we are passionate about revolutionizing patient communication and enhancing healthcare practice performance. We believe that providing exceptional patient experiences is crucial for every practice, regardless of its size or specialty.
                </p>
                <p>
                  Our mission is to empower healthcare practices with cutting-edge AI technology, specifically designed to optimize patient interactions and communication channels. We understand the challenges faced by practices in managing phone calls, handling patient inquiries, and keeping schedules full. That's why we created PracticeClaw — a platform that harnesses the power of AI to deliver virtual front desk assistants that work tirelessly to support your patients 24/7.
                </p>
                <p>
                  With PracticeClaw, you can say goodbye to missed calls and the limitations of traditional front desk operations. Our AI assistants are capable of answering patient questions, providing real-time support, booking appointments, and converting inquiries into loyal patients. We have integrated advanced machine learning algorithms to ensure that our assistants continuously learn and improve, delivering outstanding patient service with every interaction.
                </p>
                <p>
                  What sets us apart is our seamless human handoff feature, which transfers critical issues, urgent appointment requests, and complex inquiries to your preferred communication channels. We integrate with your EMR, phone system, CRM, and scheduling tools, enabling a smooth handover and ensuring your team stays in control while patients receive timely assistance.
                </p>
              </div>
            </div>

            <div id="founder" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <Stethoscope className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold" data-testid="text-about-founder">Our Founder</h2>
              </div>
              <div className="flex justify-center mb-6">
                <img
                  src={founderImage}
                  alt="Jim Wanek, Founder & CEO"
                  className="w-40 h-40 rounded-full object-cover border-4 border-primary/20"
                  data-testid="img-founder"
                />
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Jim Wanek is a serial entrepreneur and senior product manager with over 20 years of experience in SaaS application development. With a passion for technology and a strong background in engineering, Jim has dedicated his career to building innovative products and collaborating with talented individuals.
                </p>
                <p>
                  As the Founder and CEO of PracticeClaw, Jim leads a team of skilled developers and designers in creating next-generation AI communication solutions for healthcare practices. PracticeClaw is an AI-powered platform that automates patient communication, appointment booking, and front desk operations. By leveraging advanced natural language processing technology, PracticeClaw's platform builds custom AI assistants trained on practice-specific content, enabling personalized and conversational interactions with patients.
                </p>
                <p>
                  Prior to founding PracticeClaw, Jim established SiteGlue AI, an innovative chatbot platform powering over 800 businesses, and 4Translation, where he developed technology to efficiently manage software localization and document translation projects. With a successful exit in 2011, Jim redirected his focus toward SaaS applications and AI technology.
                </p>
                <p>
                  Jim's areas of expertise include product vision and strategy, product development, AI integration, engineering, project management, voice and data integration, as well as healthcare technology and product marketing. Jim holds a BSME in Mechanical Engineering from Marquette University.
                </p>
              </div>
            </div>

            <div id="what-we-do" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold" data-testid="text-about-what-we-do">What We Do</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  PracticeClaw is an innovative AI-powered communication platform that empowers healthcare practices to automate patient interactions, appointment booking, and front desk operations. By integrating advanced natural language processing technology, PracticeClaw delivers AI assistants trained on your practice's specific content to provide personalized and conversational experiences with every patient.
                </p>
                <p>
                  The platform offers AI-powered assistants that work tirelessly, 24/7, to provide real-time support and keep your schedule full. These assistants can answer patient inquiries, handle appointment booking, manage reminders, and optimize the overall patient experience. With PracticeClaw, practices can streamline their communication channels, reduce missed calls, and increase patient satisfaction.
                </p>
                <p>
                  One of the key advantages of PracticeClaw is its customization capabilities. Practices can easily tailor the tone, personality, and behavior of their AI assistant to align with their brand and specific patient needs. The platform provides a user-friendly dashboard for monitoring conversations and making adjustments on the fly.
                </p>
                <p>
                  PracticeClaw also offers seamless integrations with 300+ EMR systems via Keragon MCP, along with phone, SMS, WhatsApp, and web chat channels — ensuring your patients can reach you wherever they are.
                </p>
              </div>
            </div>

            <div id="compliance" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold" data-testid="text-about-compliance">Security & Compliance</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With a focus on data privacy and security, PracticeClaw complies with industry-standard regulations and offers full HIPAA compliance for the secure transmission of protected health information (PHI). Every patient interaction is encrypted and logged with audit trails to meet the highest standards of healthcare data protection.
                </p>
                <p>
                  PracticeClaw enables healthcare practices to enhance patient experiences, optimize communication workflows, and drive practice growth by leveraging the power of AI-driven communication — all while maintaining the trust and security your patients expect.
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
