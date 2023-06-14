import Typography from "@mui/material/Typography";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Layout from "../features/landing/components/Layout";
import { Box, Button } from "@mui/material";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { css } from "@mui/material/styles";
import React, { useEffect } from "react";


const BoxStyle = css({
  color: "#fff",
  height: "auto",
  overflow: "hidden",
});

const typographyStyleBody1 = css({
  marginTop: "24px",
});

const buttonStyle = css({
  padding: "16px",
  marginTop: "24px",
  marginBottom: "24px",
  width: "40%",
});

const Landing = () => {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const location = useLocation();
  const { loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/app", {
        state: { from: location },
      });
    }
  }, [isAuthenticated, navigate, location]);

  return (
    <Layout>
      <Player
        autoplay
        loop
        src="https://assets4.lottiefiles.com/packages/lf20_2ks3pjua.json"
        style={{ height: "300px", width: "300px" }}
      >
        <Controls visible={false} buttons={["play", "repeat", "frame", "debug"]} />
      </Player>
      <Box sx={BoxStyle}>
        <Typography variant="h2" component="h1">
          This is the best Instagram desktop app you can imagine!
        </Typography>
        <Typography variant="body1" sx={typographyStyleBody1}>
          Log in and see for yourself
        </Typography>

        <Button onClick={loginWithRedirect} variant="contained" sx={buttonStyle}>
          Log in
        </Button>
      </Box>
    </Layout>
  );
};

export default Landing;