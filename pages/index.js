import Link from "next/link";
import Navbar from "../compononets/Navbar";
import { UserAuth } from "../context/AuthContext";

export default function Home() {
  const { user } = UserAuth();

  return (
    <>
      <Navbar />
      <div className="wrapper">
        <h1>Main page</h1>
        {user ? (
          <h2>
            Logged in as {user.displayName}. Go to your{" "}
            <Link href={"/account"}>Account Settings</Link>
          </h2>
        ) : null}
      </div>
    </>
  );
}
