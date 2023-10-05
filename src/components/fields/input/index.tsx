import { inputInterface } from "ts/interfaces";

const index = (props: inputInterface) => {
  return (
    <>
      <input ref={props.passwordRef} {...props} />
    </>
  );
};

export default index;
