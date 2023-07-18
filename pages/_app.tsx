/* eslint-disable react/jsx-props-no-spreading */
import { Analytics } from "@vercel/analytics/react";
import { AppProps } from "next/app";
import "../styles/global.css";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
};

export default App;
