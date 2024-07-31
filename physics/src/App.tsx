import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { Toaster } from "sonner";

function App() {
  return (
    <HelmetProvider>
      <Helmet title="%s | physis" />
      <Toaster richColors />
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;
