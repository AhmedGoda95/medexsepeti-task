import { IProductItem } from "@/types";
import { Box } from "@mui/material";
import { FC } from "react";
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
        paddingBlock: "30px 24px",
        paddingInline: 1.5,
      }}
    >
      <Box
        sx={{
          borderBottom: "1px solid #f7f7f7",
          paddingBottom: 2,
          marginBottom: 2,
        }}
      >
        <ProductFav />
        <ProductImage name={name} src={src} />
      </Box>
      <Box
        sx={{
          paddingInline: 1,
        }}
      >
        <ProductRating rating={rating} />
        <ProductName name={name} />
        <ProductPrice price={price} oldPrice={oldPrice} />
      </Box>
    </Box>
  );
};

export default VerticalItem;
