import { AppBar, Toolbar, Grid, Box } from "@mui/material";
import Icons from "./Icons";

import Logo from "./Logo";
import SearchBar from "./SearchBar";

const UpperHeader = () => {
  return (
    <AppBar
      elevation={0}
      position="static"
      sx={(theme) => ({
        backgroundColor: theme.palette.primary.main,
        paddingBlock: 2.5,
        paddingInline: {
          xs: 2,
          lg: 0,
        },
      })}
    >
      <Grid container justifyContent="center">
        <Grid item xs={12} lg={10} xl={8}>
          <Toolbar
            disableGutters
            sx={{
              justifyContent: "space-between",
              flexWrap: {
                xs: "wrap",
                md: "nowrap",
              },
            }}
          >
            <Box sx={{ order: 1 }}>
              <Logo />
            </Box>
            <Box
              sx={{
                order: {
                  xs: 3,
                  md: 1,
                },
                textAlign: "center",
                width: {
                  xs: "100%",
                  lg: "auto",
                },
                marginTop: {
                  xs: 1,
                  md: 0,
                },
              }}
            >
              <SearchBar />
            </Box>
            <Box sx={{ order: 1 }}>
              <Icons />
            </Box>
          </Toolbar>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default UpperHeader;
