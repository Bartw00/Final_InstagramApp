import { Auth0Provider } from "@auth0/auth0-react";

import ThemeProvider from "./shared/contexts/themeProvider";
import ApiProvider from "./shared/contexts/apiProvider";
import IntlProvider from "./shared/contexts/intlProvider";
import AppRouter from "./router/AppRouter";
import "./App.css";

function App() {
  return (
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH_DOMAIN}
      clientId={import.meta.env.VITE_AUTH_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <ApiProvider>
        <IntlProvider>
          <ThemeProvider>
            <AppRouter />
          </ThemeProvider>
        </IntlProvider>
      </ApiProvider>
    </Auth0Provider>
  );
}

export default App;
