import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./pages/app/dashboard";
import { SignIn } from "./pages/auth/sign-in";
import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";
import { SignUp } from "./pages/auth/sign-up";
import { Users } from "./pages/app/users/users";
import { NotFound } from "./components/not-found";
import { Mechanics } from "./pages/subjects/mechanics/mechanics";
import PrivateRoutes from "./components/private-route";
import { Electromagnestism } from "./pages/subjects/electromagnestism";
import { Optics } from "./pages/subjects/optics";
import { Thermometry } from "./pages/subjects/thermometry";
import { WaveMotion } from "./pages/subjects/wave-motion";
import { ModernPhysics } from "./pages/subjects/modern-physics";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoutes />,
    children: [{ path: "/", element: <Dashboard /> },
      { path: "/mecanica", element: <Mechanics /> },
      { path: "/eletromagnetismo", element: <Electromagnestism /> },
      { path: "/optica", element: <Optics /> },
      { path: "/termologia", element: <Thermometry/> },
      { path: "/ondulatoria", element: <WaveMotion/> },
      { path: "/fisicamoderna", element: <ModernPhysics/> },
    ],
  },
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/users", element: <Users /> }
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "/sign-in", element: <SignIn /> },
    ],
  },
  
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "/sign-in", element: <SignIn /> },
      { path: "/sign-up", element: <SignUp /> },
    ],
  },
   {
    path: '/mecanica',
    element: <Mechanics />,
  },
  {
    path: '*',
    element: <NotFound />,
  }
]);
