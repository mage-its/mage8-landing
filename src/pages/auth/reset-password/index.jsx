import LoginRegisterDialog from "@/components/LoginRegisterDialog";
import Seo from "@/components/Seo";
import { Grid } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function VerifyEmail() {
  const router = useRouter();

  useEffect(() => {
    const { token } = router.query;

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
    <>
      <Seo templateTitle="Reset Password" />
      <div className="h-screen footer-b-background bg-cover">
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
    </>
  );
}
