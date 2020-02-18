import { useRouter } from "next/router";
import Layout from "../components/Layout";

const Post = props => {
  const route = useRouter();
  console.log(route);
  return (
    <Layout>
      <h1>{route.query.title}</h1>;
    </Layout>
  );
};

export default Post;
