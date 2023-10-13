import * as Yup from "yup";
import { useState } from "react";
import { Login } from "components/UI";
import { Formik, Form, Field } from "formik";
import { Button, Input } from "components/fields";
import { FilterModalIcon1 } from "assets/images/svg/filter";

type AuthType = {
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (e: boolean) => void;
};

type TregistrValues = {
  email: string;
  userName: string;
  password: string;
};

const index = ({ isAuthModalOpen, setIsAuthModalOpen }: AuthType) => {
  const [registrValues, setRegistrValues] = useState<any>({
    email: "",
    userName: "",
    password: "",
  });

  const changeLoginInput = ({ name, value }: any) => {
    registrValues[name] = value;
    setRegistrValues(registrValues);
  };

  const submitRegistr = (values: TregistrValues) => {
    console.log(values);
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
    email: Yup.string()
      .trim()
      .required("Email is not entered")
      .email("User email is invalid")
      .matches(regex),
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
              {isAuthModalOpen ? (
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={(values) => submitRegistr(values)}
                >
                  <Form className="auth-modal__form">
                    <Field name="userName">
                      {({ field }: any) => {
                        return (
                          <Input
                            type="text"
                            placeholder="имя пользователя"
                            className="auth-modal__form-input"
                            {...field}
                          />
                        );
                      }}
                    </Field>

                    <Input
                      type="email"
                      name="email"
                      placeholder="электронная почта"
                      className="auth-modal__form-input"
                      onChange={(e) => {
                        changeLoginInput({
                          name: e.target.name,
                          value: e.target.value,
                        });
                      }}
                    />
                    <Input
                      type="password"
                      name="password"
                      placeholder="пароль"
                      className="auth-modal__form-input"
                      onChange={(e) => {
                        changeLoginInput({
                          name: e.target.name,
                          value: e.target.value,
                        });
                      }}
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
      </section>
    </>
  );
};

export default index;
