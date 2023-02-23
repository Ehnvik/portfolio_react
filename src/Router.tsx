import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Contact } from "./components/Contact/Contact";
import { Home } from "./components/Home/Home";
import { Projects } from "./components/Projects/Projects";
import { Resume } from "./components/Resume/Resume";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        index: true,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/resume",
        element: <Resume></Resume>,
      },
    ],
  },
]);
