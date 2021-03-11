import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import { GraphQLClient } from "graphql-request";
import { useRouter } from "next/router";
import Alert from '@material-ui/lab/Alert';

const graphcms = new GraphQLClient("http://localhost:3000/api/graphql");

export default function RatingForm({ movieId }) {
  const [value, setValue] = useState<number | null>(0);

  const router = useRouter();

  const refreshData = () => {
    
    router.replace(router.asPath);
  };

  const createRating = async (value) => {
    const { createOneRating } = await graphcms.request(
      `
      mutation CreateRating{
        createOneRating(
            data:{
              username:"katia",
              rate:${value},
              movie:{connect:{id:${movieId}}}})
            {
            id
            rate
            username
          }
        }
    `
    );

    if (createOneRating) {
      <Alert severity="success">Thanks for rating!!!</Alert>
      refreshData();

    }
  };

  return (
    <Box component="fieldset" mb={3} borderColor="transparent">
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          createRating(newValue);
        }}
        size="large"
      />
      <Button
        onClick={() => createRating(value)}
        variant="contained"
        color="secondary"
      >
        RATE
      </Button>
    </Box>
  );
}
