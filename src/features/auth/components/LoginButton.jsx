import { useAuth0 } from "@auth0/auth0-react";

export default function LoginButton(className, style) {
  const { loginWithRedirect } = useAuth0();
  return (
    <button style={style} onClick={loginWithRedirect}>
      Login
    </button>
  );
}
