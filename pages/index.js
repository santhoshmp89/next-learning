import Layout from "../components/Layout";

const Shows = () => {
  return (
    <Layout>
      <h2>Today's Show</h2>
    </Layout>
  );
};

Shows.getInitialProps = async () => {
  const result = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const resultJson = await result.join();

  console.log(resultJson);
};

export default Shows;
