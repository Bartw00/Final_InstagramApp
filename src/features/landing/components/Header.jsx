import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import { useAuth0 } from "@auth0/auth0-react";
import { FormattedMessage } from "react-intl";


export default function Header() {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();



  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <FormattedMessage
            id="common.appTitle"
            defaultMessage={"Instagram App"}
          />
        </Typography>
        <Button color="inherit" onClick={loginWithRedirect}>
          <FormattedMessage id="landing.login" defaultMessage={"Login"} />
        </Button>
      </Toolbar>
    </AppBar>
  );
}
