import { Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import "./followStats.css";

const FollowStatsContainer = styled(Container)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "flex-start",
  marginTop: "40px",
  gap: "8px",
  flexGrow: 1,
});

export default function FollowStats() {
  return (
    <FollowStatsContainer>
      <div className="stats">
        <Typography variant="body2">Posts</Typography>
        <Typography variant="h6">123</Typography>
      </div>
      <svg
        className="svgStyle"
        width="1"
        height="54"
        viewBox="0 0 1 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="0.5" y1="0.5" x2="0.499998" y2="53.5" stroke="#C4C4CD" />
      </svg>

      <div className="stats">
        <Typography variant="body2">Followers</Typography>
        <Typography variant="h6">123</Typography>
      </div>
      <svg
        className="svgStyle"
        width="1"
        height="54"
        viewBox="0 0 1 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="0.5" y1="0.5" x2="0.499998" y2="53.5" stroke="#C4C4CD" />
      </svg>

      <div className="stats">
      <Typography variant="body2">Following</Typography>
        <Typography variant="h6">123</Typography>
      </div>
    </FollowStatsContainer>
  );
}
