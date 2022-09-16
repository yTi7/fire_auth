import { AuthContestProvider } from "../context/AuthContext";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContestProvider>
      <Component {...pageProps} />
    </AuthContestProvider>
  );
}

export default MyApp;
