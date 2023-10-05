export interface buttonInterface {
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  type?: "submit" | "reset" | "button" | undefined;
}
