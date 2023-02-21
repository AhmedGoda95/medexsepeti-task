import { Box, Grid } from "@mui/material";

import MainTitle from "./MainTitle";
import Subtitle from "./Subtitle";
import facebook from "../../public/facebook.svg";
import PaymentsLogos from "./PaymentsLogos";

const Footer = () => {
  return (
    <Box
      sx={{
        paddingInline: {
          xs: 1,
          md: 0,
        },
      }}
    >
      <Grid container justifyContent="center">
        <Grid item xs={12} md={10} xl={8}>
          <Box
            sx={(theme) => ({
              borderTop: `2px solid #f7f7f7`,
              marginTop: 4,
              paddingTop: 4,
            })}
          >
            <Grid
              container
              columnSpacing={{ xs: 1, md: 2 }}
              rowSpacing={{ xs: 2, lg: 0 }}
            >
              <Grid item xs={6} md={4} lg={2}>
                <MainTitle title="MedexSepeti" />
                <Subtitle title="About us" path="/" />
                <Subtitle title="Membership Agreement" path="/" />
                <Subtitle title="Contact Us" path="/" />
                <Subtitle title="Privacy policy" path="/" />
              </Grid>
              <Grid item xs={6} md={4} lg={2}>
                <MainTitle title="Categories" />
                <Subtitle title="Home & Family" path="/" />
                <Subtitle title="Specialties Products" path="/" />
                <Subtitle title="Dental" path="/" />
                <Subtitle title="Imaging & Lab" path="/" />
                <Subtitle title="Medical Facilities" path="/" />
                <Subtitle title="Rehabilitation & Wellness" path="/" />
                <Subtitle title="Consumables & Clothing" path="/" />
                <Subtitle title="Pharmacy & Personal Care" path="/" />
              </Grid>
              <Grid item xs={6} md={4} lg={2}>
                <MainTitle title="Popular Brands" />
                <Subtitle title="MOCOM" path="/" />
                <Subtitle title="Dr. Schumacher" path="/" />
                <Subtitle title="Respirox" path="/" />
                <Subtitle title="FİXFLEX" path="/" />
                <Subtitle title="Zhermack" path="/" />
                <Subtitle title="Ultradent" path="/" />
                <Subtitle title="Tokuyama" path="/" />
                <Subtitle title="Voco" path="/" />
                <Subtitle title="FGM - Kibar Dental - Diş Deposu" path="/" />
                <Subtitle title="LASCOD" path="/" />
              </Grid>
              <Grid item xs={6} md={4} lg={2}>
                <MainTitle title="Follow Us" />
                <Subtitle title="Facebook" path="/" imgSrc={facebook} />
                <Subtitle title="Twitter" path="/" imgSrc={facebook} />
                <Subtitle title="Pinterest" path="/" imgSrc={facebook} />
                <Subtitle title="YouTube" path="/" imgSrc={facebook} />
                <Subtitle title="Instagram" path="/" imgSrc={facebook} />
                <Subtitle title="LinkedIn" path="/" imgSrc={facebook} />
              </Grid>
              <Grid item xs={6} md={4} lg={2}>
                <MainTitle title="Payment" />
                <Subtitle title="Payment options" path="/" />
                <Subtitle title="Bank Campaigns" path="/" />
              </Grid>
              <Grid item xs={6} md={4} lg={2}>
                <MainTitle
                  title="Do you have a question?"
                  style={{ textAlign: "center" }}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <PaymentsLogos />
    </Box>
  );
};

export default Footer;
