import Routes from "./Routes";
import { lazy, Suspense } from "react";
import { Loader } from "components/layouts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const Home = lazy(() => import("pages/Home"));
  const Error = lazy(() => import("pages/Error"));
  const Basket = lazy(() => import("pages/Basket"));
  const History = lazy(() => import("pages/History"));
  const Category = lazy(() => import("pages/Category"));

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Routes />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/pages/history",
          element: <History />,
        },
        {
          path: "/pages/basket",
          element: <Basket />,
        },
        {
          path: "/pages/:id",
          element: <Category />,
        },
        {
          path: "*",
          element: <Error />,
        },
      ],
    },
  ]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={routes} />
      </Suspense>
    </>
  );
};

export default App;
