import { Outlet } from "react-router-dom";
import { Footer, Header } from "components/layouts";

const routes = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default routes;
