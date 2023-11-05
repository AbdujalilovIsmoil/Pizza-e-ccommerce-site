import { Input } from "antd";
import { memo, FC } from "react";
import { inputInterface } from "../../../ts/interfaces";

const index: FC<inputInterface> = memo((props): JSX.Element => {
  return (
    <>
      <Input {...props} />
    </>
  );
});

export default index;
