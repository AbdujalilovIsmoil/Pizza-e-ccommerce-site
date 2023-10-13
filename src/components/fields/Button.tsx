interface buttonInterface {
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  type?: "submit" | "reset" | "button" | undefined;
}

const Button = (props: buttonInterface) => {
  return (
    <>
      <button {...props}>{props.children}</button>
    </>
  );
};

export default Button;
