import { Grid, Input, Spacer, Text, Button } from "@nextui-org/react";

export default function ForgotPasswordSection({ setState, formik }) {
  return (
    <div className="mt-28 mb-36">
      <Grid.Container direction="column" className="px-12">
        <Input
          css={{ $$inputColor: "#272727" }}
          placeholder="Masukkan email kamu"
          size="md"
          label="Email"
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
          <Button flat auto className="bg-[#17c964]/10 flex-1" color="primary">
            Reset
          </Button>
        </div>
      </Grid.Container>
    </div>
  );
}
