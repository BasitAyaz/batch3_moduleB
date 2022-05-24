import { Typography } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";

function Profile() {
  const params = useParams();
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Typography>Profile id = {params.id}</Typography>
      <Typography variant="h3">{location.state.name}</Typography>
    </>
  );
}

export default Profile;
