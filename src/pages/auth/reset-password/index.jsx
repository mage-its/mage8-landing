import Footer from "@/components/Footer";
import LoginRegisterDialog from "@/components/LoginRegisterDialog";
import Navbar from "@/components/Navbar";
import authService from "@/services/auth.service";
import { Button, Grid, Spacer, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { Component, useEffect } from "react";

export default function VerifyEmail() {
  const router = useRouter();

  useEffect(() => {
    const { token } = router.query;
    console.log(token);
    if (!token === "") {
      router.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  const handleClose = (e) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <div className="h-screen bg-single-dark-background bg-cover">
      <Grid.Container
        direction="row"
        className="h-screen w-screen"
        justify="center"
        alignContent="center"
      >
        <div className="w-full m-3 max-w-md md:max-w-lg lg:max-w-xl">
          <LoginRegisterDialog
            initialState={"resetPassword"}
            onClose={handleClose}
          />
        </div>
      </Grid.Container>
    </div>
  );
}
