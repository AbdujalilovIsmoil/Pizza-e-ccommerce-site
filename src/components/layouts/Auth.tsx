import * as Yup from "yup";
import { usePost } from "hook";
import { storage } from "services";
import { Login } from "components/UI";
import "react-phone-input-2/lib/style.css";
import { useEffect, useState } from "react";
import { Button, Input } from "components/fields";
import { FilterModalIcon2 } from "assets/images/svg/filter";
import { Formik, Form, Field, FastFieldProps } from "formik";

interface FieldProps extends FastFieldProps {}

type AuthType = {
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (e: boolean) => void;
};

type TregistrValues = {
  mobile: string;
  username: string;
  password: string;
};

const Auth = ({ isAuthModalOpen = false, setIsAuthModalOpen }: AuthType) => {
  const [isRegistrAndLogin, setIsRegistrAndLogin] = useState<boolean>(
    JSON.parse(storage.get("storage") as string) || false
  );

  const { mutate } = usePost({
    path: "/user/register",
    queryKey: "registration",
    onSuccess: () => {
      setIsRegistrAndLogin(false);
      storage.set("storage", "false");
    },
  });

  const submitRegistr = (values: TregistrValues) => {
    mutate(values);
  };

  const initialValues: TregistrValues = {
    mobile: "",
    username: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().trim().required("Username is not entered"),
    password: Yup.string().trim().required("Password is not entered"),
    mobile: Yup.string().trim().required("Mobile phone is not entered"),
  });

  const loginFunction = () => {
    if (isRegistrAndLogin) {
      setIsRegistrAndLogin(false);
      storage.set("storage", "false");
    } else {
      setIsRegistrAndLogin(true);
      storage.set("storage", "true");
    }
  };

  useEffect(() => {
    storage.set("storage", isRegistrAndLogin);
  }, [isRegistrAndLogin]);

  return (
    <>
      <section
        className={`auth-modal ${isAuthModalOpen && "auth-modal--open"}`}
      >
        <div className="container">
          <div className="auth-modal__container">
            <img
              src={FilterModalIcon2}
              alt="auth-modal-close"
              className="auth-modal__container-close"
              onClick={() => setIsAuthModalOpen(false)}
            />
            <div className="auth-modal__background">
              <div className="auth-modal__content">
                <h4 className="auth-modal__background-heading">
                  Вход в аккаунт
                </h4>
                <h4 className="auth-modal__background-desc">
                  Сможете быстро оформлять заказы, использовать бонусы
                </h4>
                {isRegistrAndLogin ? (
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values) => submitRegistr(values)}
                  >
                    <Form className="auth-modal__form">
                      <Field name="username">
                        {({ field, meta }: FieldProps) => {
                          return (
                            <>
                              <Input
                                {...field}
                                type="text"
                                id="username"
                                placeholder="имя пользователя"
                                className={`auth-modal__form-input ${
                                  meta.touched &&
                                  meta.error &&
                                  "auth-modal__form-input--error"
                                }`}
                              />
                              {meta.touched && meta.error && (
                                <h4 className="auth-modal__form-error">
                                  {meta.error}
                                </h4>
                              )}
                            </>
                          );
                        }}
                      </Field>
                      <Field name="password">
                        {({ field, meta }: FieldProps) => {
                          return (
                            <>
                              <Input
                                {...field}
                                type="password"
                                placeholder="пароль"
                                className={`auth-modal__form-input ${
                                  meta.touched &&
                                  meta.error &&
                                  "auth-modal__form-input--error"
                                }`}
                              />
                              {meta.touched && meta.error && (
                                <h4 className="auth-modal__form-error">
                                  {meta.error}
                                </h4>
                              )}
                            </>
                          );
                        }}
                      </Field>

                      <Field name="mobile">
                        {({ field, meta }: FieldProps) => {
                          return (
                            <>
                              <Input
                                {...field}
                                type="number"
                                placeholder="телефон"
                                className={`auth-modal__form-input ${
                                  meta.touched &&
                                  meta.error &&
                                  "auth-modal__form-input--error"
                                }`}
                              />
                              {meta.touched && meta.error && (
                                <h4 className="auth-modal__form-error">
                                  {meta.error}
                                </h4>
                              )}
                            </>
                          );
                        }}
                      </Field>

                      <Button
                        type="submit"
                        className="auth-modal__background-btn"
                      >
                        Войти
                      </Button>
                    </Form>
                  </Formik>
                ) : (
                  <Login
                    setIsAuthModalOpen={setIsAuthModalOpen}
                    isAuthModalOpen={isAuthModalOpen}
                  />
                )}
                <h4
                  onClick={() => loginFunction()}
                  className="auth-modal__background-link"
                >
                  {isRegistrAndLogin ? "Login" : "Registration"}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Auth;
