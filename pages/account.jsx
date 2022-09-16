import { useRouter } from "next/router";
import { useEffect } from "react";
import Navbar from "../compononets/Navbar";
import { UserAuth } from "../context/AuthContext";

const account = () => {
  const { user, logout } = UserAuth();
  const history = useRouter();

  useEffect(() => {
    if (user == null) {
      history.push("/");
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="wrapper">
        <h1>Account Page</h1>
        <h2>Welcome, {user?.displayName}</h2>
      </div>
    </>
  );
};

export default account;
