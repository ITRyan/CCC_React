import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ProfilePage from "../Pages/auth";
import TicketPage from "../Pages/TicketPage";
import Movie from "../Pages/SW";

const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/ticket" element={<TicketPage />} />
      <Route path="/movie" element={<Movie />} />
    </Routes>
  );
};

export default Router;
