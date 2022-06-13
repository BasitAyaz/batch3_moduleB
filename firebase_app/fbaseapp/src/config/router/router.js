import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../pages/home";
import NotFound from "../../pages/notfound";
import Login from "../../pages/login";
import SignUp from "../../pages/signup";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/:id" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
