import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
export const SidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/home",
  },
  {
    title: "Bookmark",
    icon: <BookmarkIcon />,
    link: "/bookmark",
  },
  {
    title: "Ticket",
    icon: <ConfirmationNumberIcon />,
    link: "/ticket",
  },
  {
    title: "Profile",
    icon: <AccountBoxIcon />,
    link: "/profile",
  },

];
