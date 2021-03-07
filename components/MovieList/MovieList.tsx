// components/playersList.js

import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import { CardActions } from "@material-ui/core";
import { format } from "date-fns";
import CommentIcon from "@material-ui/icons/Comment";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import Router from "next/router";
import CurrentRating from "../CurrentRating";


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: "#032336",
    position: "relative",
    cursor: "pointer",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 18,
    color: "#FC9543",
    textTransform: "uppercase",
  },
  details_container: {
    padding: 0,
    paddingLeft: "15px",
    paddingBottom: "5px",
  },
  details: {
    fontSize: 14,
    color: "#748690",
    marginBottom: "10px",
  },
  icon_margin: {
    marginRight: "10px",
  },
  icons: {
    fontSize: 30,
    color: "#748690",
  },
  pos: {
    marginBottom: 12,
    fontSize: 12,
  },
  media: {
    height: 250,
    backgroundPosition: "15% 10%",
  },
});

const MovieList = ({ movies }) => {
  const classes = useStyles();
  return (
    <Grid style={{ marginTop: "20px" }} container spacing={2}>
      {movies.map((movie) => (
        <Grid item xs={4} key={movie.id}>
          <Card
            onClick={(e) => Router.push("/movies/[id]", `/movies/${movie.id}`)}
            className={classes.root}
          >
            <CardMedia
              className={classes.media}
              image={movie.poster_path}
              title={movie.title}
            />
            <CurrentRating
              rating={movie.rating_average}
              option="readOnly"
            />

            <CardContent>
              <Typography className={classes.title} gutterBottom>
                {movie.title}
              </Typography>
            </CardContent>
            <CardActions className={classes.details_container}>
              <Typography className={classes.details} gutterBottom>
                {movie.duration} min
              </Typography>
              <Typography className={classes.details} gutterBottom>
                {format(new Date(movie.release_date), "YYY")}
              </Typography>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  position: "absolute",
                  right: "20px",
                }}
              >
                <Typography gutterBottom className={classes.icon_margin}>
                  <CommentIcon className={classes.icons} />
                </Typography>
                <Typography className={classes.icons} gutterBottom>
                  <CheckBoxOutlineBlankIcon className={classes.icons} />
                  <span
                    style={{
                      fontSize: "16px",
                      position: "relative",
                      top: "-8px",
                      left: "-24px",
                    }}
                  >
                    {movie.ageRange}
                  </span>
                </Typography>
              </div>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieList;
