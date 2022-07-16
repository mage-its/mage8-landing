import { Button, Card, Grid, Input, Spacer, Text } from "@nextui-org/react";
import { IconX } from "@tabler/icons";
import GoogleLogo from "@/assets/images/logo/GoogleLogo";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

function LoginSection({ setState }) {
  return (
    <Grid.Container direction="column" className="px-12">
      <Text weight="light" size={14}>
        Email
      </Text>
      <Input
        css={{ $$inputColor: "#272727" }}
        placeholder="Masukkan email kamu"
        size="md"
      ></Input>
      <Spacer y={1} />
      <Text weight="light" size={14}>
        Password
      </Text>
      <Input.Password
        css={{ $$inputColor: "#272727" }}
        placeholder="Masukkan password kamu"
        size="md"
      ></Input.Password>
      <Text
        onClick={() => setState("forgotPassword")}
        size={"0.8rem"}
        className="text-right cursor-pointer select-none"
      >
        Lupa password?
      </Text>
      <Spacer y={1.5} />
      <Button flat className="bg-[#06381b]" color="primary">
        Login
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
      >
        <GoogleLogo />
        <Spacer x={0.5} />
        <Text weight="semibold">Masuk dengan Google</Text>
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

function RegisterSection({ setState }) {
  return (
    <Grid.Container direction="column" className="px-12">
      <Text weight="light" size={14}>
        Nama
      </Text>
      <Input
        css={{ $$inputColor: "#272727" }}
        placeholder="Masukkan nama kamu"
        size="md"
      ></Input>
      <Spacer y={1} />
      <Text weight="light" size={14}>
        Email
      </Text>
      <Input
        css={{ $$inputColor: "#272727" }}
        placeholder="Masukkan email kamu"
        size="md"
      ></Input>
      <Spacer y={1} />
      <Text weight="light" size={14}>
        Password
      </Text>
      <Input.Password
        css={{ $$inputColor: "#272727" }}
        placeholder="Masukkan password kamu"
        size="md"
      ></Input.Password>
      <Spacer y={1} />
      <Text weight="light" size={14}>
        Konfirmasi Password
      </Text>
      <Input.Password
        css={{ $$inputColor: "#272727" }}
        placeholder="Konfirmasi password"
        size="md"
      ></Input.Password>
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
        <Button flat auto className="bg-[#17c964]/10 flex-1" color="primary">
          Daftar
        </Button>
      </div>
    </Grid.Container>
  );
}

function ForgotPasswordSection({ setState }) {
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
            onClick={() => setState("login")}
            flat
            auto
            className="bg-[#102c4c] text-[#0463d0] flex-1"
            color="secondary"
          >
            Kembali
          </Button>
          <Button flat auto className="bg-[#17c964]/10 flex-1" color="primary">
            Reset
          </Button>
        </div>
      </Grid.Container>
    </div>
  );
}

export default function LoginRegisterDialog({ children }) {
  const [state, setState] = useState("login"); // login || register || forgotPassword

  return (
    <motion.div
      layout="size"
      className="w-full rounded-xl bg-[#1A191E] bg-login-background bg-repeat bg-cover overflow-auto"
    >
      <div className="md:w-4/5 xs:w-full bg-[#1A191E] md:float-right p-4">
        <Grid.Container direction="column">
          <Grid.Container
            direction="column"
            style={{ width: "100%" }}
            alignContent="flex-end"
            alignItems="flex-end"
            justify="flex-end"
          >
            <Button auto>
              <IconX />
            </Button>
          </Grid.Container>
          <Spacer y={3} />
          {state === "login" && <LoginSection setState={setState} />}
          {state === "register" && <RegisterSection setState={setState} />}
          {state === "forgotPassword" && (
            <ForgotPasswordSection setState={setState} />
          )}
          <Spacer y={2} />
        </Grid.Container>
      </div>
    </motion.div>
  );
}
