import { createBrowserRouter } from "react-router-dom";
import { RouteObject } from "react-router-dom";
import AppLayout from "./pages/Layout/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Academic from "./pages/Academic";
import Profile from "./pages/Profile";
import Proker from "./pages/Proker";
import Aspiration from "./pages/Aspiration";
import ProkerDetail from "./pages/ProkerDetail";

const RouterBuilder = () => {
  //Only for client to see
  const generalRoutes: RouteObject[] = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/academic",
      element: <Academic />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/proker",
      element: <Proker />,
    },
    {
      path: "/proker/:nav/:prokerName",
      element: <ProkerDetail />,
    },
    {
      path: "/aspiration",
      element: <Aspiration />,
    },
  ];

  const routes = createBrowserRouter([
    {
      element: <AppLayout />,
      children: generalRoutes,
    },
  ]);

  // px-5 px-12 px-20

  return routes;
};

export default RouterBuilder;
