import { Box, Button } from "@mui/material";
import { FC } from "react";

const AddToCart: FC<{ bottom: number; borderRadius: string }> = ({
  bottom,
  borderRadius,
}) => {
  return (
    <Box
      className="addToCart"
      sx={{
        position: "absolute",
        bottom,
        left: 0,
        backgroundColor: "#fff",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.5s ease",
        borderRadius,
      }}
    >
      <Button
        variant="contained"
        sx={{
          color: "#22b0f0",
          backgroundColor: "#e8f8ff",
        }}
      >
        Add To Cart
      </Button>
    </Box>
  );
};

export default AddToCart;
