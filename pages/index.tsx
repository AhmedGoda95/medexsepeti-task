import { Box, Grid } from "@mui/material";

import Brands from "@/components/Home/Brands";
import PpromotedProducts from "@/components/Home/PpromotedProducts";
import { PRODUCTS } from "@/DUMMY_DATA";
import ListItems from "@/components/Home/ListItems";

export default function Home() {
  const filteredSpecialOffersProducts = PRODUCTS.filter(
    (product) => product?.hasOffer
  ).slice(0, 9);
  const filteredNotableProducts = PRODUCTS.filter(
    (product) => product?.mostViewed
  ).slice(0, 12);
  const filteredMostViewedProducts = PRODUCTS.filter(
    (product) => product?.mostViewed
  ).slice(0, 10);
  const filteredLastVisitedProducts = PRODUCTS.filter(
    (product) => product?.lastVisited
  ).slice(0, 12);

  return (
    <>
      <Box mt={2} mb={3}>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={10} xl={8}>
            {/* Promoted Products */}
            <PpromotedProducts />

            {/* Special Offers */}
            <ListItems
              products={filteredSpecialOffersProducts}
              title="Special Offers"
            />
          </Grid>
        </Grid>

        {/* Brands */}
        <Box
          sx={{
            backgroundColor: "#28527a",
            paddingTop: 3,
            paddingBottom: 6,
            marginBottom: 5,
            "& img": {
              width: 120,
              height: 120,
              borderRadius: "50%",
            },
            "& .swiper-button-prev, & .swiper-button-next": {
              borderColor: "#fff!important",
              color: "#fff!important",
              width: "10px!important",
              height: "10px!important",
              padding: "12px!important",
              "&:after": {
                fontSize: "12px!important",
              },
            },
          }}
        >
          <Grid container justifyContent="center">
            <Grid item xs={12} md={10} xl={8}>
              <Brands />
            </Grid>
          </Grid>
        </Box>

        <Grid container justifyContent="center">
          <Grid item xs={12} md={10} xl={8}>
            {/* Notable Products */}
            <ListItems
              products={filteredNotableProducts}
              title="Notable Products"
              isVertical={false}
            />

            {/* Most Viewed Products */}
            <ListItems
              products={filteredMostViewedProducts}
              title="Most Viewed Products"
            />

            {/* Last Visited Products */}
            <ListItems
              products={filteredLastVisitedProducts}
              title="Last Visited Products"
              isVertical={false}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
