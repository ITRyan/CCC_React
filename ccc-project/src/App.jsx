
import "./App.css";
import { BrowserRouter} from "react-router-dom";
import Router from "./Components/Router";
import Sidebar from "./Components/Sidebar";
<<<<<<< HEAD
=======
import React from "react";

>>>>>>> a164d8f2c37161c05c386e3b8bff4f0eaabe7b90

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
