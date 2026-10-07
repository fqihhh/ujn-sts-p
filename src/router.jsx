import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "detail/:id",
        element: <Detail />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;