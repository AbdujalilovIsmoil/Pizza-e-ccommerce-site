import Routes from "./routes";
import { Home, Error } from "./pages";
import { lazy, Suspense } from "react";
import { Loader } from "./components/layouts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = (): JSX.Element => {
  const Login = lazy(() => import("./pages/Login"));
  const About = lazy(() => import("./pages/about"));
  const Banner = lazy(() => import("./pages/banner"));
  const Registration = lazy(() => import("./pages/Registration"));
  const GetAllNewsCreate = lazy(() => import("./pages/GetAllNewsCreate"));

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Routes />,
      children: [
        {
          path: "/",
          element: <Home />,
          children: [
            {
              path: "/",
              element: <Banner />,
            },
            {
              path: "/about",
              element: <About />,
            },
          ],
        },
        {
          path: "/getAllNewsCreate",
          element: <GetAllNewsCreate />,
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
