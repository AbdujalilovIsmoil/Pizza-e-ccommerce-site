import * as Yup from "yup";
import { usePost } from "hook";
import "react-phone-input-2/lib/style.css";
import { Button, Input } from "components/fields";
import { Formik, Form, Field, FieldProps } from "formik";
import { storage } from "services";

type TregistrValues = {
  mobile: string;
  password: string;
};

type AuthType = {
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (e: boolean) => void;
};

type LoginValues = {
  _id: string;
  token: string;
  mobile: string;
  username: string;
}

const Login = ({ setIsAuthModalOpen }: AuthType) => {
  const { mutate } = usePost({
    queryKey: "login",
    path: "/user/login",
    onSuccess: (values: LoginValues) => {
      storage.set("userId", values._id);
      storage.set("token", values.token);
      storage.set("username", values.username);
      setIsAuthModalOpen(false);
    }
  })


  const submitLogin = (values: TregistrValues) => {
    mutate(values);
  };

  const initialValues: TregistrValues = {
    password: "",
    mobile: ""
  };

  const validationSchema = Yup.object({
    password: Yup.string().trim().required("Password is not entered"),
    mobile: Yup.string().trim().required("Mobile phone is not entered")
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
            {({ field, meta }: FieldProps) => {
              return (
                <>
                  <Input
                    {...field}
                    type="password"
                    placeholder="пароль"
                    className={`auth-modal__form-input ${meta.touched &&
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
          <Field name="mobile">
            {({ field, meta }: FieldProps) => {
              return (
                <>
                  <Input
                    {...field}
                    type="number"
                    placeholder="телефон"
                    className={`auth-modal__form-input ${meta.touched &&
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

          <Button className="auth-modal__background-btn" type="submit">
            Войти
          </Button>
        </Form>
      </Formik>
    </>
  );
};

export default Login;
