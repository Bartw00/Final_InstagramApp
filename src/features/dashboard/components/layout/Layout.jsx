import {
  ContentContainer,
  RootContainer,
  SidebarContainer,
  RightPanel,
} from "./Layout.styles";
import LeftPanel from "../leftPanel/LeftPanel";


export default function Layout({ children }) {
  return (
    <RootContainer>
      <SidebarContainer>
        <LeftPanel />
      </SidebarContainer>
      <RightPanel>
        <ContentContainer>{children}</ContentContainer>
      </RightPanel>
    </RootContainer>
  );
}
