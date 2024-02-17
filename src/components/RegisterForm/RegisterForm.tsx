import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Col} from "react-bootstrap";
import "./RegisterForm.css";
import toastr from "toastr";
import authService from "../../services/authService";
import { RegisterCredentials } from "../../models/requests/auth/registerCredentials";
import { HttpStatusCode } from "axios";
import { Link } from "react-router-dom";

const RegisterForm: React.FC = () => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Doldurulması zorunlu alan*"),
    lastName: Yup.string().required("Doldurulması zorunlu alan*"),
    email: Yup.string()
      .required("Doldurulması zorunlu alan*")
      .email("Geçersiz e-posta adresi*"),
    password: Yup.string().required("Doldurulması zorunlu alan*"),
    rePassword: Yup.string()
      .required("Doldurulması zorunlu alan*")
      .oneOf([Yup.ref("password")], "Parolalar eşleşmiyor*"),
  });

  const onSubmit = async (values: RegisterCredentials) => {
    const response = await authService.register({
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
    });
    console.log(response.data);
    if (response.status === HttpStatusCode.Ok) {
      localStorage.setItem("token", JSON.stringify({ ...response.data }));
      toastr.success("Kayıt başarılı", "YEEEEEE");
    } else {
      toastr.error("Kayıt başarısız");
    }
  };

  return (
    <>
    <h3 className="mt-6">Hemen Kayıt Ol</h3>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        rePassword: "",
      }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form className="form-animated-border">
        <Field
          name="firstName"
          className="form-control mt-6"
          type="text"
          placeholder="Ad*"
        />
        <ErrorMessage
          name="firstName"
          render={(error) => <label style={{ color: "red" }}>{error}</label>}
        />
        <Field
          name="lastName"
          className="form-control mt-6"
          type="text"
          placeholder="Soyad*"
        />
        <ErrorMessage
          name="lastName"
          render={(error) => <label style={{ color: "red" }}>{error}</label>}
        />
        <Field
          name="email"
          className="form-control mt-6"
          type="email"
          placeholder="E-Posta"
        />
        <ErrorMessage
          name="email"
          render={(error) => <label style={{ color: "red" }}>{error}</label>}
        />
        <Field
          name="password"
          className="form-control mt-6"
          type="password"
          placeholder="Şifre"
        />
        <ErrorMessage
          name="password"
          render={(error) => <label style={{ color: "red" }}>{error}</label>}
        />
        <Field
          name="rePassword"
          className="form-control mt-6"
          type="password"
          placeholder="Şifre"
        />
        <ErrorMessage
          name="rePassword"
          render={(error) => <label style={{ color: "red" }}>{error}</label>}
        />
        <Button type="submit" className="btn btn-primary w-100 mt-6">
          <b>Kayıt Ol</b>
        </Button>
      </Form>
    </Formik>
    <Col className="col-12 mt-6 p-4 text-center">
            <label>
              Zaten bir hesabın var mı?
              <Link to="/giris" className="text-decoration-none text-muted ">
                {" "}
                <b>Giriş Yap</b>
              </Link>
            </label>
          </Col>
    </>
  );
};

export default RegisterForm;