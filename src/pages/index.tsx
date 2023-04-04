import Head from "next/head";
import Starter from "@/components/Starter";
import useUserStore from "@/stores/useUserStore";

export default function Home() {
  const currentUser = useUserStore((state) => state.currentUser);

  return (
    <>
      <Head>
        <title>Next Chakra Starter Template</title>
        <meta name="description" content="next chakra starter template" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Starter />
      </main>
    </>
  );
}
