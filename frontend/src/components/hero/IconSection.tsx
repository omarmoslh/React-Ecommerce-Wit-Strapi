import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import { title } from "process";
import { useTheme } from "@emotion/react";
const IconSection = () => {
  const theme = useTheme();
  return (
    <Container
      sx={{ mt: 3, bgcolor: theme.palette.mode === "dark" ? "#000" : "#fff" }}
    >
      <Stack
        sx={{ flexWrap: "wrap" }}
        direction={"row"}
        alignItems={"center"}
        divider={
          useMediaQuery("(min-width:600px)") ? (
            <Divider variant="middle" orientation="vertical" flexItem />
          ) : null
        }
      >
        <MyBox
          icon={<ElectricBoltIcon fontSize="large" />}
          title={"Fast Delivery"}
          subTitle={"Start From $10"}
        />
        <MyBox
          icon={<WorkspacePremiumOutlinedIcon fontSize="large" />}
          title={"Money Guarantee"}
          subTitle={"7 Days Back"}
        />
        <MyBox
          icon={<AccessAlarmOutlinedIcon fontSize="large" />}
          title={"365 Days"}
          subTitle={"For Free Return"}
        />
        <MyBox
          icon={<CreditScoreOutlinedIcon fontSize="large" />}
          title={"payment"}
          subTitle={"Secure System"}
        />
      </Stack>
    </Container>
  );
};

export default IconSection;

const MyBox = ({ icon, title, subTitle }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: 250,
        display: "flex",
        flexGrow: 1,
        alignItems: "center",
        gap: 3,
        justifyContent: useMediaQuery("(min-width:600px)") ? "center" : "left",
        py: 1.6,
      }}
    >
      {icon}
      <Box>
        <Typography variant="body1">{title}</Typography>
        <Typography
          variant="body1"
          sx={{ fontWeight: 300, color: theme.palette.text.secondary }}
        >
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
};
