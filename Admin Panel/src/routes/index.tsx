import { memo } from "react";
import { Outlet } from "react-router-dom";

const index = memo((): JSX.Element => {
  return (
    <>
      <Outlet />
    </>
  );
});

export default index;
