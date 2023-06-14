import { Box, Button, Typography } from "@mui/material";
import Profile from "./showUserProfile/ShowUserProfile";
import { styled } from "@mui/material/styles";
import { useEffect, useRef } from "react";

import FollowStats from "../followStats/FollowStats";
import IconLabelTabs from "./navDrawer/iconLabelTabs";

import { useAuth0 } from "@auth0/auth0-react";

const LeftPanelContainer = styled(Box)({
  backgroundColor: "#1A1A24",
  color: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "0px",
  width: "400px",
  position: "fixed",
  top: 0,
  bottom: 0,
  overflowY: "auto",
  "&::-webkit-scrollbar": {
    width: "0.1em",
  },
  "&::-webkit-scrollbar-track": {
    boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
    webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#1A1A24",
    outline: "1px solid slategrey",
  },
});

const ScrollingContainer = styled(Box)({
  padding: "4px",
  width: "400px",
});

export default function LeftPanel() {
  const { logout } = useAuth0();
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const contentHeight = contentRef.current?.offsetHeight || 0;
      const containerHeight = window.innerHeight;
      const isScrollable = contentHeight > containerHeight;
      contentRef.current.style.overflowY = isScrollable ? "auto" : "visible";
    };

    handleScroll();
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <LeftPanelContainer>
      <ScrollingContainer ref={contentRef}>
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
      </ScrollingContainer>
    </LeftPanelContainer>
  );
}
