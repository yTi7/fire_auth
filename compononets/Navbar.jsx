import Link from "next/link";
import React from "react";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logout();
      location.href = "/"
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="nav">
      <Link href={"/"}>
        <h1>Firebase Google Auth & Context</h1>
      </Link>
      {user?.displayName ? (
        <button onClick={handleSignOut}>SignOut</button>
      ) : (
        <Link href={"/signin"}>Sign In</Link>
      )}
    </div>
  );
};

export default Navbar;
