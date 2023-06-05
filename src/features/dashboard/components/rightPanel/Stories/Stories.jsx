import { Box } from "@mui/material";
import Ellipse2 from "../../../../../assets/Ellipse2.png";
import { styled } from "@mui/system";
import "./stories.css";

const ScrollingGroup = () => {
    return (
      <div className="scrolling-group-container" style={{ display: "flex", flexDirection: "row" }}>
        <div className="scrolling-group">
        <img src={Ellipse2} alt="react logo" style={{ marginRight: "16px" }} />
        <img src={Ellipse2} alt="react logo" style={{ marginRight: "16px" }} />
        <img src={Ellipse2} alt="react logo" style={{ marginRight: "16px" }} />
        <img src={Ellipse2} alt="react logo" style={{ marginRight: "16px" }} />
        <img src={Ellipse2} alt="react logo" style={{ marginRight: "16px" }} />
        <img src={Ellipse2} alt="react logo" style={{ marginRight: "16px" }} />
        <img src={Ellipse2} alt="react logo" style={{ marginRight: "16px" }} />
        </div>
      </div>
    );
  };

const StoriesContainer = styled(Box)({
  color: "white",
  display: "flex",
  margin: "0px",
  padding: "0px",
  width: "100%",
  marginTop: "24px", 
//   overflowX: "auto",
//   scrollbarWidth: "thin",
  // height: "100vh",
});

export default function Stories() {
  return (
    <StoriesContainer>
      <ScrollingGroup />
    </StoriesContainer>
  );
}
