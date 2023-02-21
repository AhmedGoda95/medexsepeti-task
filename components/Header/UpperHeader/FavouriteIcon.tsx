import { Box, Typography } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Link from "next/link";

const FavouriteIcon = () => {
  return (
    <Box
      sx={(theme) => ({
        textAlign: "center",
        paddingBlock: 0.5,
        marginInline: 2,
        paddingInline: 2,
        borderRight: `1px solid #5b7084`,
        borderLeft: `1px solid #5b7084`,
        "& a": {
          color: "#19A4E3",
          textDecoration: "none",
        },
        display: {
          xs: "none",
          sm: "block",
        },
      })}
    >
      <Link href="/">
        <FavoriteBorderOutlinedIcon />
        <Typography
          sx={(theme) => ({
            color: theme.palette.primary.contrastText,
            fontSize: 10,
          })}
        >
          Favourite
        </Typography>
      </Link>
    </Box>
  );
};

export default FavouriteIcon;
