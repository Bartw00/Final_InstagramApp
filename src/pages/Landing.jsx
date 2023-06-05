import Typography from "@mui/material/Typography";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { FormattedMessage } from "react-intl";

import Layout from "../features/landing/components/Layout";
import { Box, Button } from "@mui/material";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const Landing = () => {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const location = useLocation();
  const { loginWithRedirect } = useAuth0();

  if (isAuthenticated) {
    navigate("/app", {
      state: { from: location },
    });
  }

  return (
    <Layout>
      <Player
        autoplay
        loop
        src="https://assets4.lottiefiles.com/packages/lf20_2ks3pjua.json"
        style={{ height: "300px", width: "300px" }}
      >
        <Controls
          visible={false}
          buttons={["play", "repeat", "frame", "debug"]}
        />
      </Player>
      <Box sx={{ color: "#fff", height: "100vh", overflow: "hidden" }}>
        <Typography variant="h2" component="h1">
          This is the best instagram desktop app you can imagine!
        </Typography>
        <Typography variant="body1" sx={{ marginTop: "24px" }}>
          Log in and see by yourself
        </Typography>

        <Button
          onClick={loginWithRedirect}
          variant="contained"
          sx={{
            padding: "16px",
            marginTop: "24px",
            marginBottom: "24px",
            width: "40%",
          }}
        >
          Log in
        </Button>
      </Box>
    </Layout>
  );
};

export default Landing;
