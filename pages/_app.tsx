import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { motion } from "framer-motion";
import ProgressBar from "@badrap/bar-of-progress";
import { useEffect } from "react";
import ProtectedRoute from "../components/layout/ProtectedRoute";

const progress = new ProgressBar({
  size: 2.5,
  color: "#45A9DD",
  className: "bar-of-progress",
  delay: 100,
});

const authRequired: string[] = [
  "/recommendation",
  "/favorite",
  "/account/[slug]",
  "/checkout",
];

function MyApp({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    router.events.on("routeChangeStart", progress.start);
    router.events.on("routeChangeComplete", progress.finish);
    router.events.on("routeChangeError", progress.finish);

    return () => {
      router.events.off("routeChangeStart", progress.start);
      router.events.off("routeChangeComplete", progress.finish);
      router.events.off("routeChangeError", progress.finish);
    };
  }, [router]);

  const animationTransition = {
    duration: 1,
    ease: "easeInOut",
  };

  return (
    <ChakraProvider>
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        transition={animationTransition}
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
        }}
      >
        {authRequired.includes(router.pathname) ? (
          <ProtectedRoute>
            <Component {...pageProps} />
          </ProtectedRoute>
        ) : (
          <Component {...pageProps} />
        )}
      </motion.div>
    </ChakraProvider>
  );
}

export default MyApp;
