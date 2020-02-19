import { useRouter } from "next/router";
import Layout from "../../components/Layout";

const Post = () => {
  const route = useRouter();
  return (
    <Layout>
      <h2>{route.query.id}</h2>
      <p>Dynamic routing</p>
    </Layout>
  );
};

export default Post;
