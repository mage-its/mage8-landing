import authService from "@/services/auth.service";
import { Grid, Input, Spacer, Button, Loading } from "@nextui-org/react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useRouter } from "next/router";

export default function RegisterSection({ setState, formik }) {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [isLoading, setLoading] = useState(false);
  const [touched, setTouched] = useState(false);
  const router = useRouter();

  return (
    <Grid.Container direction="column" className="px-12">
      <Input
        css={{ $$inputColor: "#272727" }}
        placeholder="Masukkan nama kamu"
        size="md"
        onChange={formik.handleChange}
        helperText={touched && formik.errors.name}
        helperColor={formik.errors.name ? "error" : "primary"}
        type="text"
        name="name"
        label="Nama"
      />
      <Spacer y={1.5} />
      <Input
        css={{ $$inputColor: "#272727" }}
        placeholder="Masukkan email kamu"
        size="md"
        onChange={formik.handleChange}
        helperText={touched && formik.errors.email}
        helperColor={formik.errors.email ? "error" : "primary"}
        type="email"
        name="email"
        label="Email"
      />
      <Spacer y={1.5} />
      <Input.Password
        css={{ $$inputColor: "#272727" }}
        placeholder="Masukkan password kamu"
        size="md"
        onChange={formik.handleChange}
        helperText={touched && formik.errors.password}
        helperColor={formik.errors.password ? "error" : "primary"}
        type="password"
        name="password"
        label="Password"
      />
      <Spacer y={1.5} />
      <Input.Password
        css={{ $$inputColor: "#272727" }}
        placeholder="Konfirmasi password"
        size="md"
        onChange={formik.handleChange}
        helperText={touched && formik.errors.confirmPassword}
        helperColor={formik.errors.confirmPassword ? "error" : "primary"}
        type="password"
        name="confirmPassword"
        label="Konfimasi Password"
      />
      <Spacer y={2} />
      <div className="flex gap-3">
        <Button
          onClick={() => setState("login")}
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
          onClick={async () => {
            setTouched(true);
            const errors = await formik.validateForm();
            if (Object.keys(errors).length === 0) {
              setLoading(true);
              const token = await executeRecaptcha("login");
              authService
                .register(
                  formik.values.name,
                  formik.values.email,
                  formik.values.password,
                  token
                )
                .then((res) => {
                  localStorage.setItem("user", JSON.stringify(res.data));
                  router.push("/dashboard");
                })
                .catch((error) => {
                  toast.error(error.response.data.message);
                })
                .finally(() => {
                  setLoading(false);
                });
            }
          }}
        >
          {isLoading ? <Loading /> : "Daftar"}
        </Button>
      </div>
    </Grid.Container>
  );
}
