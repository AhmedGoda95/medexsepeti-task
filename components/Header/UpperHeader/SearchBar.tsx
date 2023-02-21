import SearchIcon from "@mui/icons-material/Search";
import { IconButton, TextField, InputAdornment } from "@mui/material";

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
        },
        backgroundColor: "#fff",
        width: {
          xs: 250,
          md: 300,
          xl: 400,
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
      }}
    />
  );
};

export default SearchBar;
