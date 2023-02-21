import { Typography } from "@mui/material";
import { FC } from "react";

const MainTitle: FC<{ title: string; style?: Record<string, any> }> = ({
  title,
  style = {},
}) => {
  return (
    <Typography
      component="h3"
      sx={(theme) => ({
        color: "#484848",
        fontWeight: 600,
        fontSize: 14,
        marginBottom: 2,
        ...style,
      })}
    >
      {title}
    </Typography>
  );
};

export default MainTitle;
