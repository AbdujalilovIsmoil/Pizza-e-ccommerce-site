import { Outlet } from "react-router-dom";
import { Footer, Header } from "components/layouts";

const index = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default index;
