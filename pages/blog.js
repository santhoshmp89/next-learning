import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";

const PostLink = props => {
  return (
    <li>
      <Link href={`/post?title=${props.title}`}>{props.title}</Link>
    </li>
  );
};

export default () => {
  return (
    <Layout>
      <h2>Blog</h2>
      <hr />
      <ul>
        <PostLink title="Hello world" />
        <PostLink title="How are you" />
        <PostLink title="I am fine" />
      </ul>
    </Layout>
  );
};
