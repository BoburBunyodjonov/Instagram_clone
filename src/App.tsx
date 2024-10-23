import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layout
const Layout = React.lazy(() => import("./layout/Layout"));

// Pages
const Home = React.lazy(() => import("./pages/home/container"));


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      // {
      //   path: "/login",
      //   element: <Auth />,
      // },
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