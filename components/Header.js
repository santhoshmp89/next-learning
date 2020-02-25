import React from "react";
import Link from "next/link";

export default () => {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/shows">
        <a>Shows</a>
      </Link>
    </div>
  );
};
