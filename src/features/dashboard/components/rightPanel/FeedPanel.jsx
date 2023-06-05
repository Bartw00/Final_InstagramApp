import { Box, Button, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";
import TopBar from "./TopBar";
import Stories from "./Stories/Stories";
import InstagramFeed from "./InstagramFeed";

const RightPanelContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  margin: "0px",
  padding: "0px",
  // height: "100vh",
  // width: "100%",
});

export default function FeedPanel() {
  return (
    <RightPanelContainer>
      <TopBar />
      <Typography
        variant="h6"
        md={1}
        sx={{ marginTop: "24px", color: "white" }}
      >
        Stories
      </Typography>
      <Stories />
      <Typography
        variant="h6"
        md={1}
        sx={{ marginTop: "24px", color: "white" }}
      >
        Feed
      </Typography>
      <InstagramFeed />
    </RightPanelContainer>
  );
}
