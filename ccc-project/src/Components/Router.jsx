import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
//import BookmarkPage from "../Pages/BookmarkPage";
import ProfilePage from "../Pages/auth";
import TicketPage from "../Pages/TicketPage";
import Movie from "../Pages/SW";
import SWpage from "../Pages/SW";
import JWpage from "../Pages/JW4";
import FFXpage from "../Pages/FFX";

const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/ticket" element={<TicketPage />} />
      <Route path="/movie" element={<Movie />} />
      <Route path="/starwarpage" element={<SWpage/>}/>
      <Route path="/johnwickpage" element={<JWpage/>}/>
      <Route path="/fastxpage" element={<FFXpage/>}/>
    </Routes>
  );
};

export default Router;
