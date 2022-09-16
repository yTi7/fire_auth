import { useEffect } from "react";
import Navbar from "../compononets/Navbar";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../context/AuthContext";
import { useRouter } from "next/router";

const signin = () => {
  const { googleSignIn, user } = UserAuth();
  const history = useRouter();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      console.log(user);
      history.push("/account");
    }
  }, [user]);

  return (
    <>
      <Navbar />
      <div className="wrapper">
        <h1>SignIn page</h1>
        <div className="buttonWrapper">
          <GoogleButton onClick={handleGoogleSignIn} />
        </div>
      </div>
    </>
  );
};

export default signin;
