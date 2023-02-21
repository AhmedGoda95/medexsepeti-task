import { Rating } from "@mui/material";
import { FC } from "react";

const ProductRating: FC<{ rating: number }> = ({ rating }) => {
  return <Rating name="rating" value={rating} size="small" readOnly />;
};

export default ProductRating;
