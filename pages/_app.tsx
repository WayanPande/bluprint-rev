import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { motion } from "framer-motion";
import ProgressBar from "@badrap/bar-of-progress";
import { useEffect } from "react";

const progress = new ProgressBar({
  size: 5,
  color: "#45A9DD",
  className: "bar-of-progress",
  delay: 100,
});

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
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </motion.div>
  );
}

export default MyApp;
