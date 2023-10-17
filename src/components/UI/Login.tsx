import * as Yup from "yup";
import "react-phone-input-2/lib/style.css";
import { Formik, Form, Field } from "formik";
import PhoneInput from "react-phone-input-2";
import { Button, Input } from "components/fields";

type TregistrValues = {
  password: string;
};

const Login = () => {
  const submitLogin = (values: TregistrValues) => {
    console.log(values);
  };

  const initialValues: TregistrValues = {
    password: "",
  };

  const validationSchema = Yup.object({
    password: Yup.string().trim().required("Password is not entered"),
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => submitLogin(values)}
      >
        <Form className="auth-modal__form">
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
          <PhoneInput
            country={"uz"}
            placeholder="Номер телефона*"
            inputClass="auth-modal__form-input"
          />

          <Button className="auth-modal__background-btn" type="submit">
            Войти
          </Button>
        </Form>
      </Formik>
    </>
  );
};

export default Login;
