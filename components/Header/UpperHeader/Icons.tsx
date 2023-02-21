import { Box } from "@mui/material";

import ProfileIcon from "./ProfileIcon";
import FavouriteIcon from "./FavouriteIcon";
import CrtIcon from "./CartIcon";

const Icons = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <ProfileIcon />
      <FavouriteIcon />
      <CrtIcon />
    </Box>
  );
};

export default Icons;
