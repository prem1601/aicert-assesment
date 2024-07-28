import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Verify from "./pages/Verify";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "register-certificate",
        element: <Register />,
      },
      {
        path: "verify-certificate",
        element: <Verify />,
      },
    ],
  },
]);
