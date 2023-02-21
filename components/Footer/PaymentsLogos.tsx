import { Box, Grid } from "@mui/material";
import Image from "next/image";

import payment from "../../public/payment.jpg";

const PaymentsLogos = () => {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.palette.background.default,
        marginTop: 2.5,
        display: {
          xs: "none",
          sm: "block",
        },
        "& img": {
          width: "100%",
          objectFit: "contain",
        },
      })}
    >
      <Grid container justifyContent="center">
        <Grid item xs={12} md={10} xl={8}>
          <Image
            src={payment}
            alt="payment logos"
            height={80}
            width={undefined}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PaymentsLogos;
