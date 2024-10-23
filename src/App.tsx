import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layout
import Layout from "./layout/Layout";

// Pages
import Auth from "./pages/auth/container";
import Home from "./pages/home/container";

// Not Found Page
import NotFound from "./pages/notFound/container/NotFound";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Auth />,
      },
      {
        path: "/register",
        element: <Auth />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App