import { Navbar } from "@/components/landing/navbar";
import { Platform } from "@/components/landing/platform";
import { UseCases } from "@/components/landing/use-cases";
import { CTA } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-16">
        <Platform />
        <UseCases />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
