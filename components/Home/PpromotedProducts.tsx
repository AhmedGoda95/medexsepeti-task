import { useRef } from "react";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
import Link from "next/link";
import { PROMOTED_PRODUCTS } from "@/DUMMY_DATA";

const PpromotedProducts = () => {
  const progressCircle = useRef<any>(null);
  const progressContent = useRef<any>(null);
  const onAutoplayTimeLeft = (s: any, time: any, progress: any) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <Box
      sx={{
        height: {
          xs: 150,
          sm: 200,
          md: 350,
          lg: 400,
          xl: 500,
        },
        marginBottom: 5,
        "& img": {
          width: "100%",
          height: "100%",
        },
      }}
    >
      <Swiper
        className="mySwiper"
        effect={"fade"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
      >
        {PROMOTED_PRODUCTS.map((product, index) => {
          return (
            <SwiperSlide key={index}>
              <Link href="/">
                <img src={product.src} alt={product.title} />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default PpromotedProducts;
