import {
  Button,
  Card,
  Grid,
  Input,
  Loading,
  Spacer,
  Text,
  useInput,
} from "@nextui-org/react";
import { IconX } from "@tabler/icons";
import GoogleLogo from "@/assets/images/logo/googleLogo";
import Link from "next/link";
import { Component, useMemo, useState } from "react";
import { motion } from "framer-motion";
import * as Yup from "yup";
import { useFormik } from "formik";
import authService from "@/services/auth.service";
import Router from "next/router";
import { auth, provider } from "@/common/firebase";
import { signInWithPopup } from "firebase/auth";

export default class LoginRegisterDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      section: props.section || "login",
      onClose: props.onClose,
      loading: false,
    };
  }

  LoginSection = ({ setState }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const formikLogin = useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .required("Required"),
      }),
      onSubmit: async (values) => {
        const { email, password } = values;
        const { data } = await authService.login(email, password);
        props.onLogin(data);
      },
    });

    return (
      <Grid.Container direction="column" className="px-12">
        <Input
          css={{ $$inputColor: "#272727" }}
          placeholder="Masukkan email kamu"
          onChange={formikLogin.handleChange}
          type="email"
          name="email"
          label="Email"
        ></Input>
        <Spacer y={1} />

        <Input.Password
          css={{ $$inputColor: "#272727" }}
          placeholder="Masukkan password kamu"
          size="md"
          onChange={formikLogin.handleChange}
          type="password"
          name="password"
          label="Password"
        ></Input.Password>
        <Text
          onClick={() => this.setState({ section: "forgotPassword" })}
          size={"0.8rem"}
          className="text-right cursor-pointer select-none"
        >
          Lupa password?
        </Text>
        <Spacer y={1.5} />
        <Button
          flat
          className="bg-[#06381b]"
          color="primary"
          onClick={() => {
            this.setState({ loading: true });
            authService
              .login({
                email: formikLogin.values.email,
                password: formikLogin.values.password,
              })
              .then((res) => {
                this.setState({ loading: false });
                localStorage.setItem("user", JSON.stringify(res));
                Router.push("/dashboard");
              });
          }}
        >
          {this.state.loading ? <Loading /> : "Login"}
        </Button>
        <Spacer y={2} />
        {/* <fieldset className="border-t border-zinc-600">
                <legend className="mx-auto px-4 text-zinc-400 text-xs font-light">
                  Login with google
                </legend>
              </fieldset> */}
        <Spacer y={0.5} />
        <Button
          bordered
          borderWeight="normal"
          size="lg"
          className="border-zinc-600"
          onClick={() => {
            signInWithPopup(auth, provider).then((result) => {
              console.log(result);
              authService
                .googleLogin(result._tokenResponse.idToken)
                .then((res) => {
                  localStorage.setItem("user", JSON.stringify(res));
                  Router.push("/dashboard");
                });
            });
          }}
        >
          <GoogleLogo />
          <Spacer x={0.5} />
          <Text weight="semibold">Masuk dengan Google</Text>
        </Button>
        <Spacer y={2} />
        <Text
          onClick={() => this.setState({ section: "register" })}
          weight="normal"
          size={14}
          className="text-center cursor-pointer select-none"
        >
          Belum punya akun? Yuk, bikin akun dulu
        </Text>
      </Grid.Container>
    );
  };

  RegisterSection = ({ setState }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
          .min(6, "Password must be at least 6 characters")
          .required("Required"),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password"), null], "Passwords must match")
          .required("Required"),
      }),
      onSubmit: async (values) => {},
    });

    return (
      <Grid.Container direction="column" className="px-12">
        <Input
          css={{ $$inputColor: "#272727" }}
          placeholder="Masukkan nama kamu"
          size="md"
          onChange={formikRegister.handleChange}
          type="text"
          name="name"
          label="Nama"
        ></Input>
        <Spacer y={1} />
        <Input
          css={{ $$inputColor: "#272727" }}
          placeholder="Masukkan email kamu"
          size="md"
          onChange={formikRegister.handleChange}
          type="email"
          name="email"
          label="Email"
        ></Input>
        <Spacer y={1} />
        <Input.Password
          css={{ $$inputColor: "#272727" }}
          placeholder="Masukkan password kamu"
          size="md"
          onChange={formikRegister.handleChange}
          type="password"
          name="password"
          label="Password"
        ></Input.Password>
        <Spacer y={1} />
        <Input.Password
          css={{ $$inputColor: "#272727" }}
          placeholder="Konfirmasi password"
          size="md"
          onChange={formikRegister.handleChange}
          type="password"
          name="confirmPassword"
          label="Konfimasi Password"
        ></Input.Password>
        <Spacer y={2} />
        <div className="flex gap-3">
          <Button
            onClick={() => this.setState({ section: "login" })}
            flat
            auto
            className="bg-[#102c4c] text-[#0463d0] flex-1"
            color="secondary"
          >
            Kembali
          </Button>
          <Button
            flat
            auto
            className="bg-[#17c964]/10 flex-1"
            color="primary"
            onClick={() => {
              this.setState({ loading: true });
              authService
                .register({
                  name: formikRegister.values.name,
                  email: formikRegister.values.email,
                  password: formikRegister.values.password,
                })
                .then((res) => {
                  this.setState({ loading: false });
                  Router.push("/dashboard");
                });
            }}
          >
            {this.state.loading ? <Loading /> : "Register"}
          </Button>
        </div>
      </Grid.Container>
    );
  };

  ForgotPasswordSection = ({ setState }) => {
    return (
      <div className="mt-28 mb-36">
        <Grid.Container direction="column" className="px-12">
          <Text weight="light" size={14}>
            Email
          </Text>
          <Input
            css={{ $$inputColor: "#272727" }}
            placeholder="Masukkan email kamu"
            size="md"
          ></Input>
          <Spacer y={2} />
          <div className="flex gap-3">
            <Button
              onClick={() => this.setState({ section: "login" })}
              flat
              auto
              className="bg-[#102c4c] text-[#0463d0] flex-1"
              color="secondary"
            >
              Kembali
            </Button>
            <Button
              flat
              auto
              className="bg-[#17c964]/10 flex-1"
              color="primary"
            >
              Reset
            </Button>
          </div>
        </Grid.Container>
      </div>
    );
  };

  ResetPassword = ({ setState }) => {
    return (
      <div className="mt-28 mb-36">
        <Grid.Container direction="column" className="px-12">
          <Text weight="light" size={14}>
            Password baru
          </Text>
          <Input.Password
            placeholder="Masukkan password baru"
            size="md"
          ></Input.Password>
          <Spacer y={1} />
          <Text weight="light" size={14}>
            Konfimrasi password
          </Text>
          <Input.Password
            placeholder="Konfirmasi password baru"
            size="md"
          ></Input.Password>
          <Spacer y={2} />
          <div className="flex gap-3">
            <Button
              flat
              auto
              className="bg-[#17c964]/10 flex-1"
              color="primary"
            >
              Reset
            </Button>
          </div>
        </Grid.Container>
      </div>
    );
  };

  render() {
    return (
      <motion.div
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
              <Button auto onClick={this.state.onClose}>
                <IconX />
              </Button>
            </Grid.Container>
            <Spacer y={3} />
            {this.state.section === "login" && <this.LoginSection />}
            {this.state.section === "register" && <this.RegisterSection />}
            {this.state.section === "forgotPassword" && (
              <this.ForgotPasswordSection />
            )}
            {this.state.section === "resetPassword" && <this.ResetPassword />}
            <Spacer y={2} />
          </Grid.Container>
        </div>
      </motion.div>
    );
  }
}
