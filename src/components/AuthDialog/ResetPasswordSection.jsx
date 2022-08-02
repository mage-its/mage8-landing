import { Grid, Text, Input, Spacer, Button } from "@nextui-org/react";

export default function ResetPassword({ setState, formik }) {
  return (
    <div className="mt-28 mb-36">
      <Grid.Container direction="column" className="px-12">
        <Input.Password
          label="Password baru"
          placeholder="Masukkan password baru"
          size="md"
        />
        <Spacer y={1} />
        <Input.Password
          label="Konfirmasi password"
          placeholder="Konfirmasi password baru"
          size="md"
        />
        <Spacer y={2} />
        <div className="flex gap-3">
          <Button flat auto className="bg-[#17c964]/10 flex-1" color="primary">
            Reset
          </Button>
        </div>
      </Grid.Container>
    </div>
  );
}
