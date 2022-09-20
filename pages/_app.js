import "../styles/globals.css";
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import store from "../redux/store";
import Head from "next/head";
import axios from "axios";
import { getCookie, setCookie } from "cookies-next";
import { useEffect } from "react";

const MyApp = ({ Component, pageProps, token }) => {
  //Setting token in cookie
  useEffect(() => {
    console.log(getCookie("_SYS_ADMIN_AUTH"));
    token && setCookie("_SYS_ADMIN_AUTH", window.btoa(token));
  }, [token]);

  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="https://media.xtwostore.de/favicon/default/favicon.PNG"
        />
        <title>xTWO Store</title>
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
};

MyApp.getInitialProps = async ({ req }) => {
  if (req) {
    return { token: "existing token" };
  } else {
    const res = await axios({
      method: "post",
      url: "https://m2.xtwodev.store/rest/V1/integration/admin/token",
      headers: {},
      data: {
        password: process.env.ADMIN_PASSWORD,
        username: process.env.ADMIN_USERNAME,
      },
    });
    return { token: res.data };
  }
};

export default MyApp;
