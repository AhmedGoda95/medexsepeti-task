import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.svg";

const Logo = () => {
  return (
    <Box
      sx={{
        width: {
          md: 230,
          xs: 150,
        },
        height: 54,
        "&img ": {
          width: "100%",
        },
      }}
    >
      <Link href="/">
        <Image
          src={logo}
          alt="medex logo"
          width={undefined}
          height={undefined}
          style={{ width: "100%" }}
        />
      </Link>
    </Box>
  );
};

export default Logo;
