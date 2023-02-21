import { Box, Typography } from "@mui/material";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";

const ProfileIcon = () => {
  return (
    <Box
      sx={(theme) => ({
        textAlign: "center",
        paddingBlock: 0.5,
        color: "#19A4E3",
      })}
    >
      <Person2OutlinedIcon />
      <Typography
        sx={(theme) => ({
          color: theme.palette.primary.contrastText,
          fontSize: 10,
        })}
      >
        Profile
      </Typography>
    </Box>
  );
};

export default ProfileIcon;
