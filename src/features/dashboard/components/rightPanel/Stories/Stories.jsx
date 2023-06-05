import { Box } from "@mui/material";
import Ellipse2 from "../../../../../assets/Ellipse2.png";
import Ellipse3 from "../../../../../assets/Ellipse 3.png";
import Ellipse4 from "../../../../../assets/Ellipse 4.png";
import Ellipse5 from "../../../../../assets/Ellipse 5.png";
import Ellipse6 from "../../../../../assets/Ellipse 6.png";
import Ellipse7 from "../../../../../assets/Ellipse 7.png";
import Ellipse8 from "../../../../../assets/Ellipse 8.png";
import Ellipse9 from "../../../../../assets/Ellipse 9.png";
import { styled } from "@mui/system";
import "./stories.css";

const ScrollingGroup = () => {
    return (
      <div className="scrolling-group-container" style={{ display: "flex", flexDirection: "row" }}>
        <div className="scrolling-group">
        <img src={Ellipse2} alt="react logo" style={{ marginRight: "16px" }} />
        <img src={Ellipse3} alt="react logo" style={{ marginRight: "16px" }} />
        <img src={Ellipse4} alt="react logo" style={{ marginRight: "16px" }} />
        <img src={Ellipse5} alt="react logo" style={{ marginRight: "16px" }} />
        <img src={Ellipse6} alt="react logo" style={{ marginRight: "16px" }} />
        <img src={Ellipse7} alt="react logo" style={{ marginRight: "16px" }} />
        <img src={Ellipse8} alt="react logo" style={{ marginRight: "16px" }} />
        <img src={Ellipse9} alt="react logo" style={{ marginRight: "16px" }} />
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
