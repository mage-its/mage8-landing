import { Grid, Spacer, Input, Text, Button, Loading } from "@nextui-org/react";
import GoogleLogo from "@/assets/images/logo/googleLogo";
import { useState } from "react";
import { toast } from "react-toastify";
import authService from "@/services/auth.service";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/common/firebase";
import Router from "next/router";

export default function LoginSection({ setState, formik }) {
  const [isLoading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [touched, setTouched] = useState(false);

  return (
    <Grid.Container direction="column" className="px-12">
      <form
        style={{
          width: "100%",
        }}
      >
        <Input
          css={{ $$inputColor: "#272727" }}
          placeholder="Masukkan email kamu"
          onChange={formik.handleChange}
          helperText={touched && formik.errors.email}
          helperColor={formik.errors.email ? "error" : "primary"}
          type="email"
          name="email"
          label="Email"
          fullWidth
        />
        <Spacer y={1.5} />
        <Input.Password
          css={{ $$inputColor: "#272727" }}
          placeholder="Masukkan password kamu"
          size="md"
          helperText={touched && formik.errors.password}
          helperColor={formik.errors.password ? "error" : "primary"}
          onChange={formik.handleChange}
          type="password"
          name="password"
          label="Password"
          fullWidth
        />
        <Text
          onClick={() => setState("forgotPassword")}
          size={"0.8rem"}
          className="text-right cursor-pointer select-none"
        >
          Lupa password?
        </Text>
        <Spacer y={1.5} />
        <Button
          style={{
            width: "100%",
          }}
          flat
          className="bg-[#06381b]"
          color="primary"
          onClick={async () => {
            setTouched(true);
            const errors = await formik.validateForm();
            if (Object.keys(errors).length === 0) {
              setLoading(true);
              authService
                .login(formik.values.email, formik.values.password)
                .then((res) => {
                  localStorage.setItem("user", JSON.stringify(res.data));
                  Router.push("/dashboard");
                })
                .catch((error) => {
                  switch (error.response.data.message) {
                    case "Incorrect email or password":
                      toast.error("Email atau password salah");
                      break;
                    case "Cannot login with email and password, use google instead":
                      toast.error(
                        "Email kamu sudah terdaftar menggunakan Google"
                      );
                      break;
                    default:
                      break;
                  }
                })
                .finally(() => {
                  setLoading(false);
                });
            }
          }}
        >
          {isLoading ? <Loading /> : "Masuk"}
        </Button>
      </form>
      <Spacer y={2} />
      <Spacer y={0.5} />
      <Button
        bordered
        borderWeight="normal"
        size="lg"
        className="border-zinc-600"
        onClick={() => {
          setGoogleLoading(true);
          signInWithPopup(auth, provider)
            .then((result) => {
              authService
                .googleLogin(result._tokenResponse.idToken)
                .then((res) => {
                  localStorage.setItem("user", JSON.stringify(res.data));
                  Router.push("/dashboard");
                })
                .catch((err) => {
                  toast.error(err.response.data.message);
                })
                .finally(() => {
                  setGoogleLoading(false);
                });
            })
            .catch(() => {
              setGoogleLoading(false);
            });
        }}
      >
        {googleLoading ? (
          <Loading color="white" />
        ) : (
          <>
            <GoogleLogo />
            <Spacer x={0.5} />
            <Text weight="semibold">Masuk dengan Google</Text>
          </>
        )}
      </Button>
      <Spacer y={2} />
      <Text
        onClick={() => setState("register")}
        weight="normal"
        size={14}
        className="text-center cursor-pointer select-none"
      >
        Belum punya akun? Yuk, bikin akun dulu
      </Text>
    </Grid.Container>
  );
}
