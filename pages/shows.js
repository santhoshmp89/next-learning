import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";

const Shows = props => {
  console.log("Shows props", props);
  return (
    <Layout>
      <h1>Today's Show</h1>
      <ul>
        {props.shows.map(show => {
          return <li key={show.name}>{show.name}</li>;
        })}
      </ul>
    </Layout>
  );
};

Shows.getInitialProps = async () => {
  const result = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await result.json();

  return {
    shows: data.map(data => data.show)
  };
};

export default Shows;
