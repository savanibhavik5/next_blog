import React, { useState, useEffect } from "react";
import HeadComponent from "@/components/HeadComponent";
import Loader from "@/components/Loader";

export async function getStaticProps(context) {
  const id = context?.params?.blog;
  const res = await fetch(`http://192.168.29.46:1234/blog/${id[0]}`);
  const blog = await res.json();
  if (!blog) {
    return {
      // notfound: true,
      redirect: {
        destination: "/",
        permenent: false,
        // statusCode: 301,
      },
      revalidate: 1,
    };
  }
  return { props: { blog, id: id } };
}
export async function getStaticPaths() {
  const res = await fetch("http://192.168.29.46:1234/blog");
  const blog = await res.json();
  return { paths: [], fallback: "blocking" };
}

const Blog = ({ blog }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => setLoaded(true), 500);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <>
      <HeadComponent title={"Blog | " + blog?.title} />
      {!loaded ? (
        <Loader />
      ) : (
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <div className="p-5 rounded-5 bg-light m-4">
              <h1 className="h1 pb-2 text-center">{blog?.title}</h1>
              <div className="d-flex align-items-center justify-content-center">
                <img
                  width="100%"
                  src={blog?.image}
                  alt={blog?.alt}
                  className=" "
                />
              </div>
              <h5 className="h5 my-3">Author:-{blog?.author}</h5>
              <div className="my-3">{blog?.body}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
