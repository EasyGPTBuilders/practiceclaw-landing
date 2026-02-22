import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Stethoscope } from "lucide-react";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { Link } from "wouter";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24 pb-16 flex items-center justify-center">
        <div className="w-full max-w-sm px-4">
          <div className="rounded-md border border-border bg-card p-8">
            <div className="flex flex-col items-center mb-6">
              <div className="w-12 h-12 rounded-md bg-primary flex items-center justify-center mb-3">
                <Stethoscope className="w-6 h-6 text-primary-foreground" />
              </div>
              <h1 className="text-xl font-bold" data-testid="text-sign-in-title">Sign in to PracticeClaw</h1>
              <p className="text-sm text-muted-foreground mt-1">Welcome back</p>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-4"
              data-testid="form-sign-in"
            >
              <div>
                <label className="text-sm font-medium mb-1.5 block">Email</label>
                <Input
                  type="email"
                  placeholder="you@practice.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  data-testid="input-email"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Password</label>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  data-testid="input-password"
                />
              </div>
              <Button type="submit" className="w-full" data-testid="button-submit-sign-in">
                Sign In
              </Button>
            </form>

            <p className="text-sm text-muted-foreground text-center mt-4">
              Don't have an account?{" "}
              <Link href="/sign-up" className="text-primary font-medium" data-testid="link-sign-up">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
