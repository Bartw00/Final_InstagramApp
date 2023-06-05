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
        {/* <FeedPanel /> */}
        <ContentContainer>{children}</ContentContainer>
      </RightPanel>
    </RootContainer>
  );
}
