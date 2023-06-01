import React, { useCallback, useState } from "react";
import Sidebar from "../Components/Sidebar";
import Input from "../Components/Input";
import "../App.css";
const ProfilePage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [variant, setVariant] = useState("login");
  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);
  return (
    <div className="profilepage">
      <div className="flex">
        <Sidebar />
        <div className="login">
          <h2 className="Signin">
            {variant === "login" ? "Sign in" : "Register"}{" "}
          </h2>
          <div className="Input">
            
              {variant === "register" && (
                <Input
                  label="Username"
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  value={name}
                />
              )}
              
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
          <hr className="login-separator"/>
          <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">Login</button>
          <p className="text-neutral-500 mt-12">Want to join us?<span className="text-white ml-1 hover:underline cursor-pointer">Create an account</span></p>
          <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
            {variant==="login"?"Login":"Sign up"}
          </button>
          <p className="text-neutral-500 mt-12">
          {variant === "login"
                ? "First time using Netflix?"
                : "Already have an account?"}
            <span
              onClick={toggleVariant}
              className="text-white ml-1 hover:underline cursor-pointer"
            >
              {variant === "login" ? "Create an account" : "Login"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
