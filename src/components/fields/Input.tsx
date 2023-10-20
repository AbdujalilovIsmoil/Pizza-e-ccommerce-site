import { ChangeEvent, RefObject } from "react";

interface inputInterface {
  id?: string;
  name?: string;
  value?: string;
  hidden?: boolean;
  checked?: boolean;
  maxLength?: number;
  className?: string;
  placeholder?: string;
  defaultValue?: string;
  passwordRef?: RefObject<HTMLInputElement>;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?:
    | "radio"
    | "text"
    | "number"
    | "checkbox"
    | "number"
    | "email"
    | "password"
    | undefined;
};

const Input = (props: inputInterface) => {
  return (
    <>
      <input ref={props.passwordRef} {...props} />
    </>
  );
};

export default Input;
