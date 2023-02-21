import { Badge, Box, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Link from "next/link";

const CrtIcon = () => {
  return (
    <Box
      sx={(theme) => ({
        textAlign: "center",
        paddingBlock: 0.5,
        "& a": {
          color: "#f9ba32",
          textDecoration: "none",
          "& .MuiBadge-badge": {
            border: `1px solid #f9ba32`,
            backgroundColor: "#28527A",
            color: "#fff",
          },
        },
      })}
    >
      <Link href="/">
        <Badge badgeContent={4}>
          <ShoppingCartOutlinedIcon />
        </Badge>
        <Typography
          sx={(theme) => ({
            color: theme.palette.primary.contrastText,
            fontSize: 10,
          })}
        >
          My Cart
        </Typography>
      </Link>
    </Box>
  );
};

export default CrtIcon;
