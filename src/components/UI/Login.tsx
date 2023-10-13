import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { Button, Input } from "components/fields";

type TregistrValues = {
  email: string;
  password: string;
};

const Login = () => {
  const submitLogin = (values: TregistrValues) => {
    console.log(values);
  };

  const initialValues: TregistrValues = {
    email: "",
    password: "",
  };

  const regex = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  const validationSchema = Yup.object({
    password: Yup.string().trim().required("Password is not entered"),
    email: Yup.string()
      .trim()
      .required("Email is not entered")
      .email("User email is invalid")
      .matches(regex, "User email is invalid"),
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => submitLogin(values)}
      >
        <Form className="auth-modal__form">
          <Field name="email">
            {({ field, meta }: any) => {
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
                    <h4 className="auth-modal__form-error">{meta.error}</h4>
                  )}
                </>
              );
            }}
          </Field>
          <Field name="password">
            {({ field, meta }: any) => {
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
                    <h4 className="auth-modal__form-error">{meta.error}</h4>
                  )}
                </>
              );
            }}
          </Field>
          <Button className="auth-modal__background-btn" type="submit">
            Войти
          </Button>
        </Form>
      </Formik>
    </>
  );
};

export default Login;
