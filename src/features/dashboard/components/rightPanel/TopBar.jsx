import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import SearchComponent from "./Search";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const TopPanelContainer = styled(Box)({
  color: "white",
  display: "flex",
  flexDirection: "row",
  alignItems: "baseline",
  justifyContent: "space-between",
  margin: "0px",
  padding: "0px",
  width: "100%",
  // height: "100vh",
  flexGrow: 1,
});

export default function TopBar() {
  return (
    <TopPanelContainer>
      <SearchComponent
        sx={{
        //   marginTop: "24px",
        }}
      />

      <Button
        variant="contained"
        startIcon={<AddCircleIcon />}
        sx={{
          padding: "8px",
          // marginTop: "24px",
          minWidth: "128px",
          background: "linear-gradient(90deg, #D24B69 16.8%, #EEA95A 86.33%)",
        }}
      >
        Add
      </Button>
    </TopPanelContainer>
  );
}
