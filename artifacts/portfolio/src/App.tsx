import React from 'react';
import { motion } from 'framer-motion';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import Home from '@/pages/Home';
import NotFound from '@/pages/not-found';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MouseGlow from '@/components/ui/MouseGlow';
import InitialLoader from '@/components/ui/InitialLoader';
import ScrollProgress from '@/components/ui/ScrollProgress';

function App() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <TooltipProvider>
        {loading ? (
          <InitialLoader />
        ) : (
          <WouterRouter base={import.meta.env.BASE_URL?.replace(/\/$/, '') || ''}>
            <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
              <ScrollProgress />
              <MouseGlow />
              <Navbar />
              <main className="relative z-10 w-full flex flex-col">
                <Switch>
                  <Route path="/" component={Home} />
                  <Route component={NotFound} />
                </Switch>
              </main>
              <Footer />
            </div>
          </WouterRouter>
        )}
        <Toaster />
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
