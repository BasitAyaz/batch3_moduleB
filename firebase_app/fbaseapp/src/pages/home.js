import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { deleteData, getData } from "../config/firebase/firebasemethods";
import axios from "axios";
import { ContactlessOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";

function Home() {
  const params = useParams();

  let dl = (id) => {
    deleteData("users", "-N4CzrWPPqUiIeMWjW0K")
      .then((res) => {
        console.log(res);
        console.log("deleted succesfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData("users").then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <>
      <h1>Home</h1>
      <Button onClick={dl}>Delete</Button>
    </>
  );
}
export default Home;
