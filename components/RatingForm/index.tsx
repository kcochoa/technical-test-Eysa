import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import { useState } from "react";
import Button from "@material-ui/core/Button";

export default function RatingForm() {
  const [value, setValue] = useState<number | null>(0);

  <Box component="fieldset" mb={3} borderColor="transparent">
    <Rating
      name="simple-controlled"
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      size="large"
    />
    <Button type="submit" variant="contained" color="secondary">
      RATE
    </Button>
  </Box>;
}
