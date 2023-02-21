import { IProductItem } from "@/types";
import { Box } from "@mui/material";
import { FC } from "react";
import AddToCart from "./components/AddToCart";
import ProductFav from "./components/ProductFav";
import ProductImage from "./components/ProductImage";
import ProductName from "./components/ProductName";
import ProductPrice from "./components/ProductPrice";
import ProductRating from "./components/ProductRating";

const VerticalItem: FC<IProductItem> = ({
  name,
  rating,
  src,
  price,
  oldPrice = null,
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        border: "2px solid #f2f2f2",
        borderRadius: 4,
        paddingTop: 4,
      }}
      className="productItem"
    >
      <Box
        sx={{
          borderBottom: "1px solid #f7f7f7",
          paddingBottom: 2,
          paddingInline: 1.5,
        }}
      >
        <ProductFav />
        <ProductImage name={name} src={src} />
      </Box>
      <Box
        sx={{
          marginTop: 2,
          paddingInline: 2.5,
          position: "relative",
          paddingBottom: 3,
          overflow: "hidden",
        }}
      >
        <ProductRating rating={rating} />
        <ProductName name={name} />
        <ProductPrice price={price} oldPrice={oldPrice} />
        <AddToCart bottom={-150} borderRadius="0 0 16px 16px" />
      </Box>
    </Box>
  );
};

export default VerticalItem;
