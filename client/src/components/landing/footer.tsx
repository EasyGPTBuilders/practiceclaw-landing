import { Stethoscope } from "lucide-react";
import { SiLinkedin } from "react-icons/si";
import { Link } from "wouter";

const footerLinks = {
  Product: [
    { label: "Case Studies", href: "/#case-studies" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Platform", href: "/platform" },
    { label: "Community", href: "/community" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Help Center", href: "#" },
    { label: "API Reference", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Partners", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer data-testid="footer" className="border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
                <Stethoscope className="w-3.5 h-3.5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tight leading-none">PracticeClaw</span>
                <span className="text-[9px] text-muted-foreground leading-none mt-0.5">AI that works</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs leading-relaxed">
              AI-powered patient communication for healthcare practices. Never miss a call, book appointments 24/7.
            </p>
            <div className="flex items-center gap-2">
              <a
                href="#"
                className="w-8 h-8 rounded-md flex items-center justify-center text-muted-foreground hover-elevate"
                data-testid="link-social-linkedin"
              >
                <SiLinkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold mb-3">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("/") && !link.href.includes("#") ? (
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        data-testid={`link-footer-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        data-testid={`link-footer-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            2026 PracticeClaw. All rights reserved. HIPAA Compliant.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-muted-foreground" data-testid="link-privacy-policy">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground" data-testid="link-terms">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-muted-foreground" data-testid="link-baa">
              BAA
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
