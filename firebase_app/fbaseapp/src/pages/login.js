import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SMButton from "../config/components/button";
import SMInput from "../config/components/input";
import { logInUser } from "../config/firebase/firebasemethods";

function Login() {
  const [userObj, setUserObj] = useState({});
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const loginUser = () => {
    if (!userObj.email) {
      alert("Email is Required");
      return;
    }
    if (!userObj.password || userObj.password.length < 6) {
      alert(
        "Password is Required and Password Must be greater that 6 characters"
      );
      return;
    }
    setLoader(true);
    console.log(userObj);
    logInUser(userObj)
      .then((success) => {
        setLoader(false);
        console.log("Loged In Successfully");
        navigate(`/${success.user.uid}`);
      })
      .catch((err) => {
        setLoader(false);
        console.log(err);
      });
  };

  return (
    <>
      <Box>
        <Typography variant="h3">LOGIN</Typography>

        <Box sx={{ padding: 3 }}>
          <SMInput
            onChange={(e) => setUserObj({ ...userObj, email: e.target.value })}
            label="Email"
            required="true"
          />
        </Box>
        <Box sx={{ padding: 3 }}>
          <SMInput
            onChange={(e) =>
              setUserObj({ ...userObj, password: e.target.value })
            }
            label="Password"
            type="password"
            required="true"
          />
        </Box>
        <Box sx={{ padding: 3 }}>
          <SMButton loading={loader} onClick={loginUser} label="Login" />
        </Box>
      </Box>
    </>
  );
}
export default Login;
