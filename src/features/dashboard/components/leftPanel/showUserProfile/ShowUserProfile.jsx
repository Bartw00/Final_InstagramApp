import { useAuth0 } from "@auth0/auth0-react";
import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const UserContainer = styled(Box)({
  color: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const AvatarStyled = styled(Avatar)({
  borderWidth: "5px",
  borderStyle: "solid",
  borderColor: "#D24C6A",
});

const Profile = () => {
  const { user, isLoading } = useAuth0();

  if (isLoading) {
    return <Avatar>N/A</Avatar>;
  }

  if (!user) {
    return null;
  }

  return (
    <UserContainer>
      <AvatarStyled
        variant="circular"
        src={user.picture}
        alt={user.name}
        sx={{ width: 144, height: 144, marginTop: "60px" }}
      />
      <Typography variant="h4" sx={{ marginTop: "24px" }}>
        {user.name}
      </Typography>
    </UserContainer>
  );
};

export default Profile;
