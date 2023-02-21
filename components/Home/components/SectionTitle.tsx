import { Typography } from "@mui/material";
import { FC } from "react";

const SectionTitle: FC<{
  title: string;
  color?: string;
  marginBottom?: number;
}> = ({ title, color = "#28527a", marginBottom = 2 }) => {
  return (
    <Typography
      component="h3"
      sx={{
        marginBottom,
        color,
        fontSize: 28,
        fontWeight: 600,
      }}
    >
      {title}
    </Typography>
  );
};

export default SectionTitle;
