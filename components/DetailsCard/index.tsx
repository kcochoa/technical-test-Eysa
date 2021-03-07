import {
  Theme,
  createStyles,
  makeStyles,
  useTheme,
} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { format } from "date-fns";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CurrentRating from "../CurrentRating";
import Image from "next/image";
import Divider from "@material-ui/core/Divider";
import CommentList from "../../components/CommentList";
import RatingForm from "../../components/RatingForm";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    average: {
      marginTop: "5px",
      color: "#748690",
    },
    title: {
      fontSize: 28,
      fontWeight: "bold",
      color: "#FC9543",
      textTransform: "uppercase",
      paddingTop: "15px",
    },
    fontDetails: {
      fontSize: 20,
      color: "#748690",
      marginBottom: "15px",
    },
    details: {
      display: "flex",
      flexDirection: "column",
    },
    featuresDetails: {
      fontSize: 14,
      color: "#748690",
      marginRight: "5px",
      marginTop: "-15px",
    },
    content: {
      flex: "1 0 auto",
    },
    cover: {
      width: "50% !important",
      height: "50vh !important",
      backgroundPosition: "40% 40%",
    },
    icon_margin: {
      marginRight: "10px",
    },
    icons: {
      color: "#FC9543",
      fontSize: 30,
    },
    rating: {
      display: "flex",
      alignItem: "center",
      position: "absolute",
      right: "20px",
      top: "10px",
    },
    title_start: {
      display: "flex",
      alignItems: "center",
      position: "relative",
    },
    divider: {
      backgroundColor: "#FC9543",
    },
    containerComment: {
      display: "flex",
      alignItems: "center",
      alignContent: "center",
    },
    commentsCardFlex: {
      display: "flex",
      flexDirection: "column",
      width: "50%",
    },
  })
);

export default function DetailsCard({
  id,
  title,
  poster_path,
  release_date,
  overview,
  rating_average,
  ageRange,
  duration,
  original_language,
  comments,
  director,
  cast,
}) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <>
      <Card key={id} className={classes.root}>
        <Image
          className={classes.cover}
          alt={title}
          src={poster_path}
          layout="fixed"
          height={400}
          width={800}
          quality={100}
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <div className={classes.title_start}>
              <Typography className={classes.title} component="h5" variant="h5">
                {title}
              </Typography>
              <div className={classes.rating}>
                <CurrentRating rating={rating_average} option="normal" />
                <Typography
                  className={classes.average}
                  component="h5"
                  variant="h5"
                >
                  {rating_average}/5
                </Typography>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <Typography
                className={classes.featuresDetails}
                variant="subtitle1"
                color="textSecondary"
              >
                {duration} min
              </Typography>
              <Typography
                className={classes.featuresDetails}
                variant="subtitle1"
                color="textSecondary"
              >
                {format(new Date(release_date), "YYY")}
              </Typography>
              <Typography className={classes.icons} gutterBottom>
                <CheckBoxOutlineBlankIcon className={classes.icons} />
                <span
                  style={{
                    fontSize: "16px",
                    position: "relative",
                    top: "-7.7px",
                    left: "-24px",
                  }}
                >
                  {ageRange}
                </span>
              </Typography>
            </div>
            <Typography
              className={classes.fontDetails}
              component="p"
              variant="h5"
            >
              {overview}
            </Typography>
            <Typography
              className={classes.fontDetails}
              component="h4"
              variant="h4"
            >
              <strong>Director: </strong>
              {director}
            </Typography>
            <Typography
              className={classes.fontDetails}
              component="h4"
              variant="h4"
            >
              <strong>Casting:</strong>{" "}
              {cast.map((c) => (
                <span key={c}>{c}, </span>
              ))}
            </Typography>
          </CardContent>
        </div>
      </Card>
      <Divider className={classes.divider} />
      <div className={classes.containerComment}>
        {comments.length > 0 ? (
          <div className={classes.commentsCardFlex}>
            <CommentList comments={comments} />
          </div>
        ) : (
          <p className={classes.fontDetails}>There's no comment yet</p>
        )}
        <RatingForm />
      </div>
    </>
  );
}
