import CategoriesList from "../components/CategoriesList";
import Header from "../components/Header";
import Container from "@material-ui/core/Container";

const Home = () => {
  return (
    <>
      <Header />
      <Container style={{ marginTop: "150px", display:"flex", alignItems:"center"}}>
        <CategoriesList category="movies" title="Movies" description=" Watch the best movies while you are travel with us! Enjoy your fly" image="/movie.jpg"/>
        <CategoriesList category="movies" title="Kids" description="In this section your kids are going to fly to another dimension" image="/movie.jpg"/>
      </Container>
    </>
  );
};

export default Home;
