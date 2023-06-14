import { Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const FollowStatsContainer = styled(Container)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "flex-start",
  marginTop: "40px",
  gap: "8px",
  flexGrow: 1,
});

const SvgStyle = styled("svg")({
  marginLeft: "8px",
  marginRight: "8px",
});

const Stats = styled("div")({
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column-reverse",
});

const Followers = styled(Typography)({
  fontFamily: "DM Sans",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "20px",
  lineHeight: "32px",
  color: "#c4c4cd",
});

const Count = styled(Typography)({
  fontFamily: "DM Sans",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "20px",
  lineHeight: "32px",
});

export default function FollowStats() {
  return (
    <FollowStatsContainer>
      <Stats>
        <Typography variant="body2">Posts</Typography>
        <Count variant="h6">123</Count>
      </Stats>
      <SvgStyle
        width="1"
        height="54"
        viewBox="0 0 1 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="0.5" y1="0.5" x2="0.499998" y2="53.5" stroke="#C4C4CD" />
      </SvgStyle>
      <Stats>
        <Typography variant="body2">Followers</Typography>
        <Count variant="h6">123</Count>
      </Stats>
      <SvgStyle
        width="1"
        height="54"
        viewBox="0 0 1 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="0.5" y1="0.5" x2="0.499998" y2="53.5" stroke="#C4C4CD" />
      </SvgStyle>
      <Stats>
        <Typography variant="body2">Following</Typography>
        <Count variant="h6">123</Count>
      </Stats>
    </FollowStatsContainer>
  );
}
