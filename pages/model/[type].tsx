import { useColorMode } from "@chakra-ui/react";
import { GetStaticPropsContext, NextPage } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import React, { useEffect } from "react";
import Footer from "../../components/layout/Footer";
import Model from "../../components/layout/Model";
import { useThemeStore } from "../../store/theme-store";
import {
  flowerData,
  ModelData,
  mozaikData,
  originalData,
} from "../../util/data";

interface IParams extends ParsedUrlQuery {
  type: string;
}

const ModelPage: NextPage<ModelData> = ({ type, img, imgFrame }) => {
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
      <Model type={type} img={img} imgFrame={imgFrame} />
      <Footer />
    </>
  );
};

export default ModelPage;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { type: "mozaik" } },
      { params: { type: "flower" } },
      { params: { type: "original" } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}

// `getStaticPaths` requires using `getStaticProps`
export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { type } = context.params as IParams;
  var data: ModelData = { type: "", img: [], imgFrame: "" };

  switch (type) {
    case "mozaik":
      data = mozaikData;
      break;
    case "flower":
      data = flowerData;
      break;
    case "original":
      data = originalData;
      break;
  }

  return {
    // Passed to the page component as props
    props: {
      type: data.type,
      img: data.img,
      imgFrame: data.imgFrame,
    },
  };
};
