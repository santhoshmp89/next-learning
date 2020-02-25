import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";

const PostLink = props => {
  return (
    <li>
      <Link href={`/p/[id]`} as={`/p/${props.id}`}>
        <a>{props.id}</a>
      </Link>
    </li>
  );
};

export default () => {
  return (
    <Layout>
      <h2>Blog</h2>
      <hr />
      <ul>
        <PostLink id="Hello world" />
        <PostLink id="How are you" />
        <PostLink id="I am fine" />
      </ul>
    </Layout>
  );
};
