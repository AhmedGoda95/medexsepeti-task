import { Box } from "@mui/material";
import ProductFav from "./components/ProductFav";
import ProductImage from "./components/ProductImage";
import ProductName from "./components/ProductName";
import ProductPrice from "./components/ProductPrice";
import ProductRating from "./components/ProductRating";
import { FC } from "react";
import { IProductItem } from "@/types";
import AddToCart from "./components/AddToCart";

const HorizontalItem: FC<IProductItem> = ({
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
        display: "flex",
        alignItems: "center",
      }}
      className="productItem"
    >
      <ProductFav />
      <Box
        sx={{
          position: "relative",
          paddingBlock: "24px 18px",
          paddingLeft: 1.5,
          overflow: "hidden",
        }}
      >
        <ProductImage name={name} src={src} />
        <AddToCart bottom={-250} borderRadius="16px 0 0 16px" />
      </Box>
      <Box
        sx={{
          paddingInline: 2,
          marginLeft: 2,
          paddingBlock: "24px 18px",
        }}
      >
        <ProductRating rating={rating} />
        <ProductName name={name} />
        <ProductPrice
          styles={{
            borderTop: "1px solid #f7f7f7",
            paddingTop: 1,
          }}
          price={price}
          oldPrice={oldPrice}
        />
      </Box>
    </Box>
  );
};

export default HorizontalItem;
