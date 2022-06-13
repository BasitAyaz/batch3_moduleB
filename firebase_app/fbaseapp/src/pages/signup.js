import { Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SMButton from "../config/components/button";
import SMInput from "../config/components/input";
import { sendData, signUpUser } from "../config/firebase/firebasemethods";

function SignUp() {
  const [userObj, setUserObj] = useState({});
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  let signupUser = () => {
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

    signUpUser(userObj)
      .then((res) => {
        setLoader(false);
        console.log(res);
        sendData(userObj, "users", res.user.uid)
          .then(() => {
            console.log("Successfully Saved");
            navigate("/" + res.user.uid);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        setLoader(false);
        console.log(err);
      });
  };

  return (
    <>
      <Box>
        <Box sx={{ padding: 3 }}>
          <SMInput
            onChange={(e) => setUserObj({ ...userObj, name: e.target.value })}
            label="Name"
            required="true"
          />
        </Box>
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
          <SMButton loading={loader} onClick={signupUser} label="Sign Up" />
        </Box>
      </Box>
    </>
  );
}
export default SignUp;
