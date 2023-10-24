import Routes from "./Routes";
import { lazy, Suspense } from "react";
import { Loader, ProductModal } from "components/layouts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const Home = lazy(() => import("pages/Home"));
  const Error = lazy(() => import("pages/Error"));
  const Filter = lazy(() => import("pages/Filter"));
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
          path: "/pages/categories/:category",
          element: <Category />,
        },
        {
          path: "/pages/retings/:reting",
          element: <Filter />,
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
      <ProductModal />
      <Suspense fallback={<Loader />}>
        <RouterProvider router={routes} />
      </Suspense>
    </>
  );
};

export default App;
