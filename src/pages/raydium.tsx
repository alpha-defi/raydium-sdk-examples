import type { NextPage } from "next";
import Head from "next/head";
import { RaydiumView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Solana Tweeter!</title>
        <meta name="description" content="This site will fly high 🦤" />
      </Head>
      <RaydiumView />
    </div>
  );
};

export default Home;
