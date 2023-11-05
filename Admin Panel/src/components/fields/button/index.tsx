import { Button } from "antd";
import { memo, FC } from "react";
import { buttonInterface } from "../../../ts/interfaces";

const index: FC<buttonInterface> = memo((props): JSX.Element => {
  return (
    <>
      <Button {...props}>{props.children}</Button>
    </>
  );
});

export default index;
