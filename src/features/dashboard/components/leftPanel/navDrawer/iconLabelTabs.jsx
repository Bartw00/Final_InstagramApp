import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SearchIcon from "@mui/icons-material/Search";
import DashboardIcon from "@mui/icons-material/Dashboard";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import { useLocation, useNavigate } from "react-router-dom";

export default function IconLabelTabs() {
  const [value, setValue] = React.useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const tabs = [
    { label: "Feed", icon: <DashboardIcon />, path: "/app" },
    { label: "Explore", icon: <SearchIcon />, path: "/explore" },
    { label: "Notifications", icon: <NotificationsIcon />, path: "/app" },
    { label: "Settings", icon: <SettingsIcon />, path: "/app" },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const path = tabs[newValue].path;
    navigate(path);
  };

  React.useEffect(() => {
    const activeTab = tabs.findIndex((tab) => tab.path === location.pathname);
    if (activeTab !== -1) {
      setValue(activeTab);
    }
  }, [location.pathname]);

  return (
    <Tabs
      variant="fullWidth"
      orientation="vertical"
      value={value}
      onChange={handleChange}
      aria-label="icon label tabs example"
      sx={{ width: "100%", marginTop: "20px" }}
    >
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          icon={tab.icon}
          iconPosition="start"
          label={tab.label}
          sx={{ color: "#fff" }}
        />
      ))}
    </Tabs>
  );
}
