import { ChangeEvent, RefObject } from "react";

export interface inputInterface {
  id?: string;
  value?: string;
  maxLength?: number;
  className?: string;
  placeholder?: string;
  passwordRef?: RefObject<HTMLInputElement>;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?:
    | "text"
    | "number"
    | "checkbox"
    | "number"
    | "email"
    | "password"
    | undefined;
}
