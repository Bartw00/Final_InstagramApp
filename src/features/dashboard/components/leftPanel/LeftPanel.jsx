import { Box, Button, Container, Typography } from "@mui/material";
import Profile from "./showUserProfile/ShowUserProfile";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";

import FollowStats from "../followStats/FollowStats";
import Divider from "@mui/material/Divider";
import IconLabelTabs from "./navDrawer/iconLabelTabs";

import { useAuth0 } from "@auth0/auth0-react";

const LeftPanelContainer = styled(Box)({
  backgroundColor: "#1A1A24",
  color: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "0px",
  // height: "100vh",
  flexGrow: 1,
});

export default function LeftPanel() {
  const { logout } = useAuth0();
  return (
    <Box>
      <LeftPanelContainer item="true" md={12}>
        <Profile />
        <Typography variant="body2" sx={{ marginTop: "16px" }}>
          @nickname
        </Typography>
        <FollowStats />
        <IconLabelTabs />
        <Button
          onClick={logout}
          variant="contained"
          sx={{
            padding: "16px",
            marginTop: "24px",
            marginBottom: "24px",
            width: "80%",
          }}
        >
          Logout
        </Button>
      </LeftPanelContainer>
    </Box>
  );
}
