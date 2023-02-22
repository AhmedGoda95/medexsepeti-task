import { IconButton, InputAdornment, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const SidebarButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <InputAdornment position="start">
        <IconButton
          onClick={() => setOpen(true)}
          sx={{
            borderRadius: "3px 0 0 3px",
            color: "#fff",
            backgroundColor: "#22b0f0",
            ":hover": {
              backgroundColor: "#1d4164",
            },
            display: {
              xs: "inline-flex",
              md: "none",
            },
          }}
        >
          <MenuIcon />
        </IconButton>
      </InputAdornment>

      <Drawer
        sx={{
          "& .MuiPaper-root": {
            padding: 1.5,
            width: {
              xs: "100%",
              sm: "50%",
            },
          },
        }}
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
      >
        side bar menu
      </Drawer>
    </>
  );
};

export default SidebarButton;
