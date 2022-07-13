import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button, Collapse, Text, Grid } from "@nextui-org/react";

export default function Home() {
  return (
    <div>
      <Button className="bg-cyan-500 hover:shadow-lg hover:shadow-cyan-500/50">
        Click Here
      </Button>
      <Grid.Container gap={2}>
        <Grid>
          <Collapse
            shadow
            title="Option"
            subtitle="More description about Option"
          >
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Collapse>
        </Grid>
        <Grid>
          <Collapse.Group shadow>
            <Collapse title="Option A">
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Text>
            </Collapse>
            <Collapse title="Option B">
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Text>
            </Collapse>
            <Collapse title="Option C">
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Text>
            </Collapse>
          </Collapse.Group>
        </Grid>
      </Grid.Container>
    </div>
  );
}
