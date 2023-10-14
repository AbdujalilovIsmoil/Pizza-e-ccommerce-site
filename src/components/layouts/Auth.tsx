import * as Yup from "yup";
import { useState } from "react";
import { Login } from "components/UI";
import { Button, Input } from "components/fields";
import { FilterModalIcon1 } from "assets/images/svg/filter";
import { Formik, Form, Field, FastFieldProps } from "formik";

interface FieldProps extends FastFieldProps {}

type AuthType = {
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (e: boolean) => void;
};

type TregistrValues = {
  email: string;
  userName: string;
  password: string;
};

const index = ({ isAuthModalOpen = false, setIsAuthModalOpen }: AuthType) => {
  const [isRegistrAndLogin, setIsRegistrAndLogin] = useState<boolean>(true);
  const submitRegistr = (values: TregistrValues) => {
    console.log(values);
    setIsRegistrAndLogin(false);
  };

  const initialValues: TregistrValues = {
    userName: "",
    email: "",
    password: "",
  };

  const regex = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  const validationSchema = Yup.object({
    userName: Yup.string().trim().required("Username is not entered"),
    password: Yup.string().trim().required("Password is not entered"),
    email: Yup.string()
      .trim()
      .required("Email is not entered")
      .email("User email is invalid")
      .matches(regex, "User email is invalid"),
  });

  return (
    <>
      <section
        className={`auth-modal ${isAuthModalOpen && "auth-modal--open"}`}
      >
        <div className="container">
          <div className="auth-modal__background">
            <img
              src={FilterModalIcon1}
              alt="auth-modal-close"
              className="auth-modal__background-close"
              onClick={() => setIsAuthModalOpen(false)}
            />
            <div className="auth-modal__content">
              <h4 className="auth-modal__background-heading">Вход в аккаунт</h4>
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
                    <Field name="userName">
                      {({ field, meta }: FieldProps) => {
                        return (
                          <>
                            <Input
                              type="text"
                              {...field}
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
                    <Field name="email">
                      {({ field, meta }: FieldProps) => {
                        console.log(field, meta);
                        return (
                          <>
                            <Input
                              {...field}
                              type="email"
                              placeholder="электронная почта"
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
                    <Button
                      type="submit"
                      className="auth-modal__background-btn"
                    >
                      Войти
                    </Button>
                  </Form>
                </Formik>
              ) : (
                <Login />
              )}
              <h4 className="auth-modal__background-text">
                Продолжая, вы соглашаетесь со сбором и обработкой персональных
                данных и пользовательским соглашением
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
