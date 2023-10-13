import { useState } from "react";
import { Button, Input } from "components/fields";

const Login = () => {
  const [loginValues, setLoginValues] = useState<any>({
    email: "",
    password: "",
  });

  const changeLoginInput = ({ name, value }: any) => {
    loginValues[name] = value;
    setLoginValues(loginValues);
  };
  return (
    <>
      <form className="auth-modal__form">
        <Input
          type="email"
          name="email"
          placeholder="электронная почта"
          className="auth-modal__form-input"
          onChange={(e) => {
            changeLoginInput({ name: e.target.name, value: e.target.value });
          }}
        />
        <Input
          type="password"
          name="password"
          placeholder="пароль"
          className="auth-modal__form-input"
          onChange={(e) => {
            changeLoginInput({ name: e.target.name, value: e.target.value });
          }}
        />
        <Button className="auth-modal__background-btn" type="submit">
          Войти
        </Button>
      </form>
    </>
  );
};

export default Login;
