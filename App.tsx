import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Deals from "@/pages/Deals";
import Alerts from "@/pages/Alerts";
import Favorites from "@/pages/Favorites";
import Arbitrage from "@/pages/Arbitrage";
import Dashboard from "@/pages/Dashboard";
import Settings from "@/pages/Settings";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/deals" component={Deals} />
      <Route path="/alerts" component={Alerts} />
      <Route path="/favorites" component={Favorites} />
      <Route path="/arbitrage" component={Arbitrage} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/settings" component={Settings} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
