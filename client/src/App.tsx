import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header"; // 👈 IMPORTANTE
import Home from "./pages/Home";
import Areas from "./pages/Areas";
import Servicos from "./pages/Servicos";
import Sobre from "./pages/Sobre";
import Equipe from "./pages/Equipe";
import Contacto from "./pages/Contacto";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/areas" component={Areas} />
      <Route path="/servicos" component={Servicos} />
      <Route path="/sobre" component={Sobre} />
      <Route path="/equipe" component={Equipe} />
      <Route path="/contacto" component={Contacto} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} /> agrogeo-consulting@1.0.0 dev G:\CONSULT\Criação de site para consultoria\agrogeo-consulting-completo\agrogeo-consulting

 
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />

          {/* 👇 SIDEBAR */}
          <Header />

          {/* 👇 CONTEÚDO PRINCIPAL */}
          <div className="md:ml-64 min-h-screen p-4">
            <Router />
          </div>

        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;