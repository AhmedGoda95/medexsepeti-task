import { Box } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const ProductFav = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 5,
        right: 5,
        zIndex: 10,
        backgroundColor: "#fff",
        boxShadow: "0px 3px 6px #00000029",
        padding: 1,
        borderRadius: "50%",
        width: 40,
        height: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <FavoriteBorderIcon />
    </Box>
  );
};

export default ProductFav;
