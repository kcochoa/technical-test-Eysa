// import { useQuery, gql } from "@apollo/client";
import { request, gql } from "graphql-request";
import { initializeApollo } from "src/apollo";
import Header from "../components/Header";
import MovieList from "../components/MovieList/MovieList";
import Container from "@material-ui/core/Container";



const getMovies = gql`
  query getAllMovies {
    movies {
      id
      title
      poster_path
      release_date
      overview
      rating_average
      original_language
      director
      cast
      ageRange
      duration
      comments {
        id
        content
        username
      }
    }
  }
`;

export default function Home({data}) {
  
  return (
    <>
      <Header />
      <Container style={{ marginTop: "150px" }}>
        <MovieList movies={data.movies}></MovieList>
      </Container>
    </>
  );
}

export async function getStaticProps() {
   
  try{
    const data = await request("http://localhost:3000/api/graphql",getMovies);
    return {props:{data}};
  }
  catch(error){
    return {props: {error}}
  }
  


  // const apolloClient = initializeApollo();

  // await apolloClient.query({
  //   query: getMovies,
  // });

  // return {
  //   props: {
  //     initialApolloState: apolloClient.cache.extract(),
  //   },
  // };
}
