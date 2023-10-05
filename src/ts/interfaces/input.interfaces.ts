import { ChangeEvent } from "react";

export interface inputInterface {
  id?: string;
  value?: string;
  className?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "number" | "checkbox" | "number" | "email" | undefined;
}
