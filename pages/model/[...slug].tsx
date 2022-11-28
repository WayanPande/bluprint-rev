import { useColorMode } from "@chakra-ui/react";
import { GetStaticPropsContext, NextPage } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import React, { useEffect } from "react";
import Detail from "../../components/layout/Detail";
import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";
import { useThemeStore } from "../../store/theme-store";
import { getImageFiles } from "../../util/detail-model";
import { removeExtension } from "../../util/my-util";

interface IParams extends ParsedUrlQuery {
  slug: string;
}

interface Slug {
  type: string;
  name: string;
}

const ModelDetailPage: NextPage<IParams> = ({ slug }) => {
  const darkMode = useThemeStore((state) => state.darkMode);
  const { setColorMode } = useColorMode();

  useEffect(() => {
    const root = window.document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      setColorMode("dark");
    } else {
      root.classList.remove("dark");
      setColorMode("light");
    }
  }, [darkMode]);

  return (
    <>
      <Head>
        <title>Bluprint.id</title>
      </Head>
      <Navbar />
      <Detail name={slug[1]} type={slug[0]} />
      <Footer />
    </>
  );
};

export default ModelDetailPage;

export function getStaticPaths() {
  const modelFilenames = getImageFiles();

  const mozaik = modelFilenames[0].map((filename) => removeExtension(filename));
  const flower = modelFilenames[1].map((filename) => removeExtension(filename));
  const original = modelFilenames[2].map((filename) =>
    removeExtension(filename)
  );

  const slugs: Slug[] = [];

  slugs.push(...mozaik.map((moz) => ({ type: "mozaik", name: moz })));
  slugs.push(...flower.map((flow) => ({ type: "flower", name: flow })));
  slugs.push(...original.map((ori) => ({ type: "original", name: ori })));

  return {
    paths: slugs.map((slug) => ({ params: { slug: [slug.type, slug.name] } })),
    fallback: false,
  };
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { slug } = context.params as IParams;

  return {
    // Passed to the page component as props
    props: {
      slug,
    },
  };
};
