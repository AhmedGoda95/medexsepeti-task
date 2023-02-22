import { Typography } from "@mui/material";
import Link from "next/link";
import { FC } from "react";

const NavigationItem: FC<NavigationItemProps> = ({
  title,
  classes = "",
  path,
}) => {
  return (
    <Typography
      component="h2"
      sx={(theme) => ({
        textAlign: "center",
        fontSize: {
          md: 11,
          lg: 13,
        },
        fontWeight: 600,
        height: "55px",
        color: "#28527a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderBottom: "2px solid #fff",
        marginTop: 1,
        "& a": {
          textDecoration: "none",
          color: "inherit",
          paddingInline: {
            md: 0.5,
            lg: 1,
          },
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      })}
      className={classes}
    >
      <Link href={path}>{title}</Link>
    </Typography>
  );
};

interface NavigationItemProps {
  title: string;
  classes?: string;
  path: string;
}

export default NavigationItem;
