import { inputInterface } from "ts/interfaces";

const index = (props: inputInterface) => {
  return (
    <>
      <input {...props} />
    </>
  );
};

export default index;
