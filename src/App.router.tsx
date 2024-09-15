import { createBrowserRouter } from "react-router-dom";
import { RouteObject } from "react-router-dom";
import AppLayout from "./pages/Layout/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Academic from "./pages/Academic";

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
