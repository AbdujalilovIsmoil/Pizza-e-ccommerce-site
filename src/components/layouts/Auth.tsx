import * as Yup from "yup";
import { useState } from "react";
import { Login } from "components/UI";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { Button, Input } from "components/fields";
import { FilterModalIcon2 } from "assets/images/svg/filter";
import { Formik, Form, Field, FastFieldProps } from "formik";

interface FieldProps extends FastFieldProps {}

type AuthType = {
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (e: boolean) => void;
};

type TregistrValues = {
  phone: string;
  userName: string;
  password: string;
};

const Auth = ({ isAuthModalOpen = false, setIsAuthModalOpen }: AuthType) => {
  const [isRegistrAndLogin, setIsRegistrAndLogin] = useState<boolean>(true);
  const submitRegistr = (values: TregistrValues) => {
    setIsRegistrAndLogin(false);
    console.log(values);
  };

  const initialValues: TregistrValues = {
    phone: "",
    userName: "",
    password: "",
  };

  const validationSchema = Yup.object({
    userName: Yup.string().trim().required("Username is not entered"),
    password: Yup.string().trim().required("Password is not entered"),
  });

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
                      <Field name="userName">
                        {({ field, meta }: FieldProps) => {
                          return (
                            <>
                              <Input
                                {...field}
                                type="text"
                                id="userName"
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

                      <PhoneInput
                        country={"uz"}
                        placeholder="Номер телефона*"
                        inputClass="auth-modal__form-input"
                      />

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
        </div>
      </section>
    </>
  );
};

export default Auth;
