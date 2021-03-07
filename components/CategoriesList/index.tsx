import Router from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginRight:30
  },
  media: {
    height: 240,
    backgroundPosition: "20% 20%",
  },
  divider: {
    backgroundColor: "#FC9543",
  },
  title: {
    fontSize: "24px",
    color: "#FC9543",
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  description: {
    fontSize: 14,
    color: "#748690",
  },
});

export default function CategoriesList({title,description,image,category}) {
  const classes = useStyles();

  return (
    <Card onClick={(e) => Router.push(`/${category}`)} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="In the Air"
        />
        <Divider className={classes.divider} />
        <CardContent>
          <Typography
            className={classes.title}
            gutterBottom
            variant="h5"
            component="h2"
          >
           {title}
          </Typography>

          <Typography
            className={classes.description}
            variant="body2"
            color="textSecondary"
            component="p"
          >
           {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
