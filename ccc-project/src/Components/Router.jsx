import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import NotFoundPage from "../Pages/NotFoundPage";
import BookmarkPage from "../Pages/BookmarkPage";
import ProfilePage from "../Pages/ProfilePage";
import TicketPage from "../Pages/TicketPage";
const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<HomePage/>}/>
      <Route path="/profile" element={<ProfilePage/>}/>
      <Route path="/bookmark" element={<BookmarkPage/>}/>
      <Route path="/ticket" element={<TicketPage/>}/>

      
    </Routes>
  );
};

export default Router;
