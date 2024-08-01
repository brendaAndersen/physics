import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme/theme-provider";

function App() {
  return (
    <ThemeProvider>
      <HelmetProvider storageKey="physis-theme" defaultTheme="dark">
        <Helmet title="%s | physis" />
        <Toaster richColors />
        <RouterProvider router={router} />
      </HelmetProvider>
    </ ThemeProvider>

  );
}

export default App;
