import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Route, Routes } from "react-router-dom";

function Dashboard(props) {
  return (
    <>
      <Box>
        <Typography>Dashboard</Typography>
        <Grid container>
          <Grid md={2}></Grid>
          <Grid md={10}>
            <Routes>
              <Route path="message" element={<Message />} />
              <Route path="feedback" element={<Feedback />} />
              <Route path="notification" element={<Notification />} />
            </Routes>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
export default Dashboard;

function Message() {
  return <Typography variant="h3">Message</Typography>;
}
function Feedback() {
  return <Typography variant="h3">Feedback</Typography>;
}
function Notification() {
  return <Typography variant="h3">Notification</Typography>;
}
