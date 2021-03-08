import { useState } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";
import { GraphQLClient } from "graphql-request";
import { useRouter } from "next/router";

const graphcms = new GraphQLClient("http://localhost:3000/api/graphql");

interface FormData {
  commentInput: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "50%",
    },
    label: {
      fontSize: 20,
      color: "#748690",
    },
  })
);

export default function CommentForm({ movieId }) {
  const { handleSubmit, register } = useForm<FormData>();

  const classes = useStyles();
  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  };

  const createComment = async (res) => {
    console.log(res.content);
    const { createOneComment } = await graphcms.request(
      `
      mutation CreateComment{
          createOneComment(
            data:{
              content:"${res.content}",
              movie:{connect:{id:${movieId}}},
              username:"katia"
            }){
              id
              content
              username
              createdAt
            }
          }
    `
    );

    if ({ createOneComment }) {
      refreshData();
    }
  };

  const onSubmit = handleSubmit(async (res) => {
    const response = await createComment(res);
  });

  return (
    <div className={classes.root}>
      <h4 className={classes.label}>Rate and let us your opinion</h4>
      <form onSubmit={onSubmit}>
        <FormControl variant="outlined">
          <TextField
            inputRef={register}
            id="outlined-basic"
            label="Write a comment..."
            variant="outlined"
            name="content"
          />
        </FormControl>
        <Button type="submit" variant="contained" color="secondary">
          ADD
        </Button>
      </form>
    </div>
  );
}
