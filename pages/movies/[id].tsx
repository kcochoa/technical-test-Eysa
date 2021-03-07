import { GraphQLClient } from "graphql-request";
import Container from "@material-ui/core/Container";
import DetailsCard from "../../components/DetailsCard";
import Header from "../../components/Header";

const graphcms = new GraphQLClient("http://localhost:3000/api/graphql");

const MovieDetails = ({ movie }) => {
  return (
    <>
      <Header />
      <Container style={{ marginTop: "150px" }}>
        <DetailsCard
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
          release_date={movie.release_date}
          overview={movie.overview}
          rating_average={movie.rating_average}
          ageRange={movie.ageRange}
          duration={movie.duration}
          original_language={movie.original_language}
          comments={movie.comments}
          director={movie.director}
          cast={movie.cast}
        />
      </Container>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const { movie } = await graphcms.request(
    `
    query getMovie{
      movie(where: {id:${params.id}}){
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
        comments{
          id
          content
          username
          createdAt
        }   
      }
    }
      `,
    {
      id: params.id,
    }
  );
  return {
    props: {
      movie,
    },
  };
};

export async function getStaticPaths() {
  const { movies } = await graphcms.request(`
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
        createdAt
      }
    }
  }
  
  `);

  return {
    paths: movies.map(({ id }) => ({ params: { id: id.toString() } })),
    fallback: false,
  };
}

export default MovieDetails;
