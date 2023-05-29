
import "./App.css";
import { BrowserRouter} from "react-router-dom";
import Router from "./Components/Router";
import Sidebar from "./Components/Sidebar";
import React from "react";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar/>
        <Router/>
      </div>
    </BrowserRouter>
  );
}

export default App;
