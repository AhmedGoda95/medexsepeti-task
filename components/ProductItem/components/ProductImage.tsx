import { Box } from "@mui/material";
import { FC } from "react";

const ProductImage: FC<{ name: string; src: string }> = ({ name, src }) => {
  return (
    <Box
      sx={{
        width: 180,
        height: 180,
        marginInline: "auto",
        "& img": {
          maxWidth: "100%",
          maxHeight: "100%",
        },
      }}
    >
      <img src={src} alt={name} />
    </Box>
  );
};

export default ProductImage;
