import { Box } from "@mui/material";
import ProductFav from "./components/ProductFav";
import ProductImage from "./components/ProductImage";
import ProductName from "./components/ProductName";
import ProductPrice from "./components/ProductPrice";
import ProductRating from "./components/ProductRating";
import { FC } from "react";
import { IProductItem } from "@/types";

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
        paddingBlock: "24px 18px",
        paddingInline: 1.5,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box>
        <ProductFav />
        <ProductImage name={name} src={src} />
      </Box>
      <Box
        sx={{
          paddingInline: 1,
          marginLeft: 2,
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
