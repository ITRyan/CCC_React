import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Input from "../Components/Input";
import "../App.css";
const ProfilePage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="login">
          <h2 className="Signin">Sign in </h2>
          <div className="Input">
            <Input
              label="Username"
              onChange={(e) => setName(e.target.value)}
              id="name"
              value={name}
            />
            <Input
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="email"
              value={email}
            />
            <Input
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              type="password"
              value={password}
            />
          </div>
          <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">Login</button>
          <p className="text-neutral-500 mt-12">Frist time using?<span className="text-white ml-1 hover:underline cursor-pointer">Create and account</span></p>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
