import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { FC } from "react";

const ProductPrice: FC<{
  styles?: Record<string, any>;
  price: number;
  oldPrice?: number | null;
}> = ({ styles = {}, price, oldPrice = null }) => {
  const currencyHandler = (price: number) => {
    return `${price} AED`;
  };

  return (
    <Box
      sx={{ display: "flex", alignItems: "center", marginTop: 1, ...styles }}
    >
      <Typography
        sx={{
          color: "#484848",
          fontSize: 18,
          fontWeight: 600,
        }}
      >
        {currencyHandler(price)}
      </Typography>
      {oldPrice && (
        <Typography
          sx={{
            marginLeft: 1.2,
            textDecoration: "line-through",
            color: "#e55959",
            fontSize: 14,
          }}
        >
          {currencyHandler(oldPrice)}
        </Typography>
      )}
    </Box>
  );
};

export default ProductPrice;
