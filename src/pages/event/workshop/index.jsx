import Seo from "@/components/Seo";
import Layout from "@/layout/MainLayout";
import { Text } from "@nextui-org/react";

export default function Workshop() {
  return (
    <>
      <Seo templateTitle="Workshop" />
      <Layout>
        <div className="h-screen bg-footer-b-background bg-cover overflow-x-hidden">
          <div className="h-screen w-screen flex justify-center items-center relative">
            <Text
              css={{
                textGradient: "45deg, $blue600 -20%, $green600 50%",
              }}
              weight="extrabold"
              className="animate-text text-5xl md:text-8xl text-center"
            >
              Coming Soon
            </Text>
            <div className="absolute w-110 h-48">
              <div className="absolute bg-center -left-4 w-48 h-48 md:w-72 md:h-72 bg-green-500 rounded-full filter blur-3xl opacity-10 animate-blob" />
              <div className="absolute bg-center -right-4 w-48 h-48 md:w-72 md:h-72 bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
