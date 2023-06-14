import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import "../public/icon/css/all.css";
import { useEffect, useState } from "react";
import { Provider, useDispatch } from "react-redux";
import { getBlog } from "@/redux/action/blog";
import { store, wrapper } from "@/redux/store/store";
import { Context } from "@/components/Context";
import "bootstrap/dist/css/bootstrap.css";
import Loader from "@/components/Loader";

App.getInitialProps = async (context) => {
  const res = await fetch("http://192.168.29.46:1234/blog");
  const data = await res.json();
  return {
    blog: data,
  };
};
function App({ Component, pageProps, blog }) {
  const [context, setContext] = useState(blog);
  // console.log(context, "context");

  // const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getBlog());
  }, []);
  return (
    <>
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css"
        rel="stylesheet"
      />
      <Context.Provider value={[context, setContext]} store={store}>
        <Header />

        <Component {...pageProps} />
        <Footer />
      </Context.Provider>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script>
      <script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"
        integrity="sha384-fbbOQedDUMZZ5KreZpsbe1LCZPVmfTnH7ois6mU1QK+m14rQ1l2bGBq41eYeM/fS"
        crossOrigin="anonymous"
      ></script>
    </>
  );
}
export default wrapper.withRedux(App);
