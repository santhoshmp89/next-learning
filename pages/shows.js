import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import Link from "next/link";

const Shows = props => {
  return (
    <Layout>
      <h1>Today's Show</h1>
      <ul>
        {props.shows.map(show => {
          return (
            <Link href={`/show/[id]`} as={`/show/${show.id}`}>
              <a>
                <li key={show.id}>{show.name}</li>
              </a>
            </Link>
          );
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
