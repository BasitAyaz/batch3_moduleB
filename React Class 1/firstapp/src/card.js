import Button from "@mui/material/Button";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

function Card(props) {
  return (
    <>
      <div className="col-md-3 p-2">
        <div className="border rounded shadow p-2">
          <h3>{props.title}</h3>
          <h2>{props.price}</h2>
          <Button
            onClick={props.action}
            disabled={false}
            variant="contained"
            endIcon={<CameraAltIcon />}
            fullWidth={true}
            sx={{ backgroundColor: "purple", borderRadius: "20px" }}
          >
            Add To Cart
          </Button>
        </div>
      </div>
    </>
  );
}
export default Card;
