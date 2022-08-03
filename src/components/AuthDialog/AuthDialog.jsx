import { Button, Grid, Spacer } from "@nextui-org/react";
import { IconX } from "@tabler/icons";
import { useState } from "react";
import { motion } from "framer-motion";
import * as Yup from "yup";
import { useFormik } from "formik";
import authService from "@/services/auth.service";
import LoginSection from "./LoginSection";
import RegisterSection from "./RegisterSection";
import ForgotPasswordSection from "./ForgotPasswordSection";
import ResetPasswordSection from "./ResetPasswordSection";
import { toast } from "react-toastify";

export default function AuthDialog({ section, onClose }) {
  const [currentSection, setCurrentSection] = useState(section);

  const formikLogin = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
  });

  const formikRegister = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .matches(
          /^(?=.*[a-z])/,
          "Password must contain at least one lowercase letter"
        )
        .matches(
          /^(?=.*[A-Z])/,
          "Password must contain at least one uppercase letter"
        )
        .matches(/^(?=.*[0-9])/, "Password must contain at least one number")
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: async (values) => {},
  });

  const formikForgotPassword = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: async (values) => {},
  });

  const formikResetPassword = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: async (values) => {},
  });

  return (
    <div
      layout="size"
      className="w-full rounded-xl bg-[#111111] bg-login-background bg-repeat bg-cover overflow-auto"
    >
      <div className="md:w-4/5 xs:w-full bg-[#111111] md:float-right p-4">
        <Grid.Container direction="column">
          <Grid.Container
            direction="column"
            style={{ width: "100%" }}
            alignContent="flex-end"
            alignItems="flex-end"
            justify="flex-end"
          >
            <Button auto onClick={onClose}>
              <IconX />
            </Button>
          </Grid.Container>
          <Spacer y={3} />
          {currentSection === "login" && (
            <LoginSection setState={setCurrentSection} formik={formikLogin} />
          )}
          {currentSection === "register" && (
            <RegisterSection
              setState={setCurrentSection}
              formik={formikRegister}
            />
          )}
          {currentSection === "forgotPassword" && (
            <ForgotPasswordSection setState={setCurrentSection} />
          )}
          {currentSection === "resetPassword" && (
            <ResetPasswordSection setState={setCurrentSection} />
          )}
          <Spacer y={2} />
        </Grid.Container>
      </div>
    </div>
  );
}
