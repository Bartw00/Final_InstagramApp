import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";

const HeaderContainer = styled(Box)({
  flexGrow: 1,
});

const ChildrenContainer = styled(Container)({
  height: "100vh",
});

import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <ChildrenContainer>{children}</ChildrenContainer>
    </>
  );
}
