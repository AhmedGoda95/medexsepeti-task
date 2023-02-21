import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";

// import required modules
import { Navigation, Grid } from "swiper";
import VerticalItem from "../ProductItem/VerticalItem";
import HorizontalItem from "../ProductItem/HorizontalItem";
import { Box } from "@mui/material";
import SectionTitle from "./components/SectionTitle";
import { FC } from "react";

const ListItems: FC<{
  products: any[];
  isVertical?: boolean;
  title: string;
}> = ({ products, isVertical = true, title }) => {
  return (
    <Box
      sx={{
        position: "relative",
        marginBottom: 5,
        "& .swiper-wrapper": {
          flexDirection: "inherit!important",
        },
        "& .swiper-slide": {
          marginTop: "10px !important",
        },
        paddingInline: {
          xs: 1,
          md: 0,
        },
      }}
    >
      <SectionTitle title={title} />
      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        grid={{
          rows: isVertical ? 1 : 2,
        }}
        navigation={true}
        modules={[Grid, Navigation]}
        className="mySwiper"
        breakpoints={
          isVertical
            ? {
                0: {
                  slidesPerView: 1,
                },
                600: {
                  slidesPerView: 2,
                },
                900: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 4,
                },
                1536: {
                  slidesPerView: 5,
                },
              }
            : {
                0: {
                  slidesPerView: 1,
                },
                900: {
                  slidesPerView: 2,
                },
                1536: {
                  slidesPerView: 3,
                },
              }
        }
      >
        {products.map((product, index) => {
          return (
            <SwiperSlide key={index}>
              {isVertical ? (
                <VerticalItem
                  name={product.name}
                  src={product.src}
                  rating={product.rating}
                  price={product.price}
                  oldPrice={product?.oldPrice}
                />
              ) : (
                <HorizontalItem
                  name={product.name}
                  src={product.src}
                  rating={product.rating}
                  price={product.price}
                  oldPrice={product?.oldPrice}
                />
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default ListItems;
