import { useColorMode } from "@chakra-ui/react";
import { GetStaticPropsContext, NextPage } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import React, { useEffect } from "react";
import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";
import Profile from "../../components/layout/Profile";
import { useThemeStore } from "../../store/theme-store";

interface IParams extends ParsedUrlQuery {
  slug: string;
}

const ProfilePage: NextPage<IParams> = ({ slug }) => {
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
      <Profile type={slug} />
      <Footer />
    </>
  );
};

export default ProfilePage;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: ProfileType.OVERVIEW } },
      { params: { slug: ProfileType.PRODUCTS } },
      { params: { slug: ProfileType.ORDERS } },
      { params: { slug: ProfileType.DETAILS } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}

// `getStaticPaths` requires using `getStaticProps`
export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { slug } = context.params as IParams;

  return {
    // Passed to the page component as props
    props: {
      slug,
    },
  };
};

export const ProfileType = {
  OVERVIEW: "overview",
  PRODUCTS: "products",
  ORDERS: "orders",
  DETAILS: "details",
};
