// import Typography from "@mui/material/Typography";

// import ShowProfile from "../showUserProfile/ShowUserProfile";
// import Sidebar from "../sidebar/Sidebar";

import {
  ContentContainer,
  Header,
  RootContainer,
  SidebarContainer,
  RightPanel,
} from "./Layout.styles";
import LeftPanel from "../leftPanel/LeftPanel";
import FeedPanel from "../rightPanel/FeedPanel";

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
