import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import { format } from "date-fns";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: "100%",
      marginBottom:"15px",
      marginTop: "15px"
    },
    avatar: {
      backgroundColor: red[500],
    },
  })
);

export default function CommentList({ comments }) {
  const classes = useStyles();
  return comments.map((comment) => {
    return (
      <Card key={comment.id} className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {comment.username.charAt(0).toUpperCase()}
            </Avatar>
          }
          title={comment.username}
          subheader={format(new Date(comment.createdAt), "dd-mm-YYY hh:mm:ss")}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {comment.content}
          </Typography>
        </CardContent>
      </Card>
    );
  });
}
