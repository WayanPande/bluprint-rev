import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-white dark:bg-slate-800">
      <Head>
        <title>Bluprint.id</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="font-bold text-5xl mb-[4rem] dark:text-white">
          Bluprint.id
        </h1>
      </main>
    </div>
  );
};

export default Home;
