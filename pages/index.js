import styles from "@/styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import HeadComponent from "@/components/HeadComponent";
import { Context } from "@/components/Context";
import Link from "next/link";
import { getBlog } from "@/redux/action/blog";
import Loader from "@/components/Loader";
import { useRouter } from "next/router";

export async function getStaticProps() {
  const res = await fetch("http://192.168.29.46:1234/blog");
  const data = await res.json();
  if (!data) {
    return {
      // notfound: true,
      redirect: {
        destination: "/",
        // permenent: false,
        statusCode: 301,
      },
      revalidate: 1,
    };
  }
  return { props: { data }, revalidate: 1 };
}
export default function Home({ prefetch }) {
  const [context, setContext] = useContext(Context);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    // dispatch(getBlog());
    // let timer = setTimeout(() => setLoaded(true), 1500);
    // return () => {
    //   clearTimeout(timer);
    // };
    // if (prefetch) router.prefetch(href);
  }, []);
  return (
    <>
      <HeadComponent title={"Blog - Home"} />
      <div className="row m-3">
        {
          // (!loaded)?(
          // <Loader />
          // ) :
          context?.map((data, index) => {
            // console.log(data)
            return (
              <div key={data?.id} className="col-md-4 col-lg-4 ">
                <div className="card m-2 p-3 ">
                  <Link
                    href={`/blog/${data.id}`}
                    // href={{
                      // pathname: `/blob/${data?.id}`,
                      // quary: { slug:data?.id },
                    // }}
                  >
                    <img
                      className={`card-img-top ${styles.blog_image}`}
                      alt={data?.alt}
                      src={data.image}
                    />
                    <h5 className="my-2">Title:- {data?.title}</h5>
                    <h5>Blog Author:- {data?.author}</h5>
                  </Link>
                </div>
              </div>
            );
          })
        }
      </div>
    </>
  );
}
