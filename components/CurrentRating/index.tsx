import Rating from "material-ui-rating";

const CurrentRating = ({ rating, option}) => {
  return (
    <Rating
      value={rating}
      max={5}
      onChange={(i) => console.log("onChange " + i)}
      {...option}
    />
  );
};

export default CurrentRating;



 