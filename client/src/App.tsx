import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/landing/theme-provider";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import PlatformPage from "@/pages/platform";
import HowItWorksPage from "@/pages/how-it-works";
import CommunityPage from "@/pages/community";
import SignInPage from "@/pages/sign-in";
import SignUpPage from "@/pages/sign-up";
import AboutPage from "@/pages/about";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/platform" component={PlatformPage} />
      <Route path="/how-it-works" component={HowItWorksPage} />
      <Route path="/community" component={CommunityPage} />
      <Route path="/sign-in" component={SignInPage} />
      <Route path="/sign-up" component={SignUpPage} />
      <Route path="/about" component={AboutPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider defaultTheme="dark">
          <Toaster />
          <Router />
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
