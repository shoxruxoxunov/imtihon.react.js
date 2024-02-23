import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Datial from "./page/Datial";
import Category from "./page/Category";

// page
import Home from "./page/Home";
import CategoryInfo from "./page/CategoryInfo";
import CategoryEorphones from "./page/CategoryEorphones";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/headphones",
          element: <Category />,
        },
        {
          path: "/detail/:slug",
          element: <Datial />,
        },
        {
          path: "/categoryinfo",
          element: <CategoryInfo />,
        },
        {
          path: "/categoryphones",
          element: <CategoryEorphones />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
