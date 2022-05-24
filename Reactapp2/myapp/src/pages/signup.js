import { Button, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUP(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signup = () => {
    let obj = {
      name,
      email,
      password,
    };
    console.log(obj);
    navigate(`/profile/${email}`, { state: obj });
  };
  return (
    <>
      <Box>
        <Grid container>
          <Grid md={6}>
            <Box sx={{ padding: 1 }}>
              <TextField
                variant="standard"
                fullWidth={true}
                value={name}
                onChange={(e) => setName(e.target.value)}
                label="Enter Name"
              />
            </Box>
            <Box sx={{ padding: 1 }}>
              <TextField
                variant="standard"
                fullWidth={true}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="Enter Email"
              />
            </Box>
            <Box sx={{ padding: 1 }}>
              <TextField
                variant="standard"
                fullWidth={true}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label="Enter Password"
                type="password"
              />
            </Box>
            <Box sx={{ padding: 1 }}>
              <Button onClick={signup} variant="contained" fullWidth={true}>
                Sign Up
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
export default SignUP;
