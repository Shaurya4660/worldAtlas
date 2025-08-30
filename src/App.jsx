import { AppLayout } from "./Layout/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import "./App.css";
import { ErrorPage } from "./pages/ErrorPage";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,   
    children: [
      {
        path: "/",
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
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
