import { Typography } from "@mui/material";
import Link from "next/link";
import { FC } from "react";

const ProductName: FC<{ name: string }> = ({ name }) => {
  return (
    <Typography
      component="h3"
      sx={{
        color: "#222",
        fontSize: 12,
        fontWeight: 400,
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitLineClamp: "2",
        WebkitBoxOrient: "vertical",
        height: 40,
        "& a": {
          textDecoration: "none",
          color: "inherit",
          ":hover": {
            color: "#22b0f0",
          },
        },
      }}
    >
      <Link href="/">{name}</Link>
    </Typography>
  );
};

export default ProductName;
