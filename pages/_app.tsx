import { AppProps } from "next/app";
import "../styles/globals.css";
import Layout from "../src/components/commons/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;