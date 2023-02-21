import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Navigation } from "swiper";
import { Box, Typography } from "@mui/material";
import { BRANDS } from "@/DUMMY_DATA";
import SectionTitle from "./components/SectionTitle";

const Brands = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <SectionTitle title="Brands" color="#fff" marginBottom={5} />
      <Swiper
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          600: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 6,
          },
          1536: {
            slidesPerView: 8,
          },
        }}
      >
        {BRANDS.map((brand, index) => {
          return (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  textAlign: "center",
                  color: "#fff",
                  "&:hover": {
                    color: "#22b0f0",
                  },
                }}
              >
                <img src={brand.src} alt={brand.name} />
                <Typography
                  sx={{
                    textTransform: "uppercase",
                    fontSize: 14,
                    marginTop: 1,
                  }}
                >
                  {brand.name}
                </Typography>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default Brands;
