import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import Router from "next/router";


interface FormData {
  username: string;
  password: string;
}

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "40vh",
    padding: theme.spacing(3),
  },
}));

export default function Login() {
  const { handleSubmit, register } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => {
    if (data.username == "katia" && data.password == "secret123") {
      Router.push("/home")
    } else {
      alert("Incorrect Credentials!");
    }
  });
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="xs">
      <form onSubmit={onSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  inputRef={register}
                  label="Username"
                  name="username"
                  size="small"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  inputRef={register}
                  label="Password"
                  name="password"
                  size="small"
                  type="password"
                  variant="outlined"
                  required
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button
              color="secondary"
              fullWidth
              type="submit"
              variant="contained"
            >
              Log in
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
