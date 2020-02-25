import Layout from "../../components/Layout";
import fetch from "isomorphic-unfetch";

const Show = props => {
  const { name, image, summary, language } = props.data;
  return (
    <Layout>
      <h4>{name}</h4>
      <p>Language: {language}</p>
      <img src={image.medium} alt={name} />
      <p>Summary: {summary}</p>
    </Layout>
  );
};

Show.getInitialProps = async context => {
  const {
    query: { id }
  } = context;

  const result = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const data = await result.json();
  console.log(data);
  return {
    data: data
  };
};

export default Show;
