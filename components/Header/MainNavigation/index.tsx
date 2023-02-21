import { Box, Grid } from "@mui/material";

import NavigationItem from "./NavigationItem";
import classes from "./navigation.module.scss";

const MainNavigation = () => {
  return (
    <Box
      sx={(theme) => ({
        borderTop: `5px solid #f9ba32`,
        backgroundColor: theme.palette.background.default,
        boxShadow: "0px 3px 6px #00000029",
        display: {
          xs: "none",
          lg: "block",
        },
      })}
    >
      <Grid container justifyContent="center">
        <Grid item lg={8}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "& h2": {
                flex: 1,
              },
            }}
          >
            <NavigationItem
              path="/"
              title="Home & Family"
              classes={classes.firstnavigationItem}
            />
            <NavigationItem
              path="/"
              title="Pharmacy & Personal Care"
              classes={classes.navigationItem}
            />
            <NavigationItem
              path="/"
              title="Specialties Products"
              classes={classes.navigationItem}
            />
            <NavigationItem
              path="/"
              title="Dental"
              classes={classes.navigationItem}
            />
            <NavigationItem
              path="/"
              title="Imaging & Lab"
              classes={classes.navigationItem}
            />
            <NavigationItem
              path="/"
              title="Medical Facilities"
              classes={classes.navigationItem}
            />
            <NavigationItem
              path="/"
              title="Rehabilitation & Wellness"
              classes={classes.navigationItem}
            />
            <NavigationItem
              path="/"
              title="Consumables & Clothing"
              classes={classes.navigationItem}
            />
            <NavigationItem
              path="/"
              title="Dental Student"
              classes={classes.navigationItem}
            />
            <NavigationItem
              path="/"
              title="Earthquake Products"
              classes={classes.lastnavigationItem}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainNavigation;
