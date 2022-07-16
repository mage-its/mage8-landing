import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import authService from "@/services/auth.service";
import { Button, Card, Grid, Spacer, Text, Input } from "@nextui-org/react";
import { useRouter } from "next/router";
import LoginRegisterDialog from "@/components/LoginRegisterDialog";
import Link from "next/link";

function Login() {
  const router = useRouter();
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
          <LoginRegisterDialog onClose={handleClose} />
        </div>
      </Grid.Container>
    </div>
  );
}

export default Login;
