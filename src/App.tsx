import Routes from "routes";
import { Home, Error } from "pages";
import { lazy, Suspense } from "react";
import { Loader } from "components/layouts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const Login = lazy(() => import("pages/Login"));
  const Registration = lazy(() => import("pages/Registration"));
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Routes />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path: "*",
      element: <Error />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/registration",
      element: <Registration />,
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
