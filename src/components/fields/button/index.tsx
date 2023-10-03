import { buttonInterface } from "ts/interfaces";

const index = (props: buttonInterface) => {
  return (
    <>
      <button {...props}>{props.children}</button>
    </>
  );
};

export default index;
