import { styled } from "@mui/material/styles";

export const RootContainer = styled("div")({
  display: "flex",
  height: "100%",
  minWidth: "400px",
});

export const SidebarContainer = styled("div")(({ theme }) => ({
  minWidth: 400,
  padding: theme.spacing(0),
  paddingLeft: "0px",
  backgroundColor: "#1A1A24",
  minHeight: "100vh",
}));

export const ContentContainer = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  backgroundColor: "#2E2E38",
}));

export const Header = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

export const RightPanel = styled("div")(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
//   backgroundColor: theme.palette.grey[100],
  backgroundColor: "#2E2E38",
  minHeight: "100vh",
}));
