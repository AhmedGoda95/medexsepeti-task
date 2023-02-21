import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Subtitle: FC<{ title: string; path: string; imgSrc?: any | null }> = ({
  title,
  path,
  imgSrc = null,
}) => {
  return (
    <Typography
      component="h5"
      sx={(theme) => ({
        fontWeight: 400,
        "& a": {
          textDecoration: "none",
          color: "#929292",
          fontSize: 12,
          ":hover": {
            color: "#22b0f0",
          },
        },
      })}
    >
      <Link href={path}>
        {imgSrc && (
          <Image
            src={imgSrc}
            alt={title}
            width={12}
            height={12}
            style={{ marginRight: 4 }}
          />
        )}
        {title}
      </Link>
    </Typography>
  );
};

export default Subtitle;
