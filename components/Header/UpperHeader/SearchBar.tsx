import SearchIcon from "@mui/icons-material/Search";
import { IconButton, TextField, InputAdornment } from "@mui/material";
import SidebarButton from "./SidebarButton";

const SearchBar = () => {
  return (
    <TextField
      size="small"
      variant="outlined"
      placeholder="Search by product name,category and type…"
      sx={{
        "& .Mui-focused": {
          "& .MuiOutlinedInput-notchedOutline": {
            border: "2px solid #f9ba32",
          },
        },
        "& .MuiOutlinedInput-notchedOutline": {
          border: 0,
        },
        "& .MuiInputBase-root": {
          paddingRight: 0,
          paddingLeft: 0,
        },
        backgroundColor: "#fff",
        width: {
          xs: "100%",
          md: 400,
          lg: 375,
          xl: 500,
        },
        borderRadius: 1,
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              sx={(theme) => ({
                borderRadius: "0 3px 3px 0",
                color: "#fff",
                backgroundColor: "#22b0f0",
                ":hover": {
                  backgroundColor: "#1d4164",
                },
              })}
            >
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
        startAdornment: <SidebarButton />,
      }}
    />
  );
};

export default SearchBar;
