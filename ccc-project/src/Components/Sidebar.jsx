import React from "react";
import "../App.css";
import { SidebarData } from "./SidebarData";

function Sidebar() {
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {SidebarData.map((val, key) => {
          return (
            <li key={key} 
            className="row" onClick={()=>{window.location.pathname = val.link}}>
               
              <div className="nav-icn" id="icon">{val.icon}</div>
              
              <div id="title">
                {val.title}
              </div>
            </li>
          ); // assuming each object in SidebarData has a 'title' property
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
