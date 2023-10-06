import { ChangeEvent, RefObject } from "react";

export interface inputInterface {
  id?: string;
  name?: string;
  value?: string;
  hidden?: boolean;
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
}
