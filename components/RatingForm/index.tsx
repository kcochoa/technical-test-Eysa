import { useState } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";

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

export default function RatingForm() {
  const { handleSubmit, register } = useForm<FormData>();
  const [value, setValue] = useState<number | null>(0);
  const [input, setInput] = useState<string | null>("");
  const classes = useStyles();

  const onSubmit = handleSubmit((data) => {
      console.log(data);
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
            name="comment"
          />
        </FormControl>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            size="large"
          />
        </Box>
        <Button type="submit" variant="contained" color="secondary">
          ADD
        </Button>
      </form>
    </div>
  );
}
