import logo from "/logo.png";
import "./App.css";
import Fruit from "./Fruit.jsx";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

function App() {
  const { isAuthenticated, logout, loginWithRedirect, getAccessTokenSilently } =
    useAuth0();

  const location = useLocation();

  const checkUser = async () => {
    if (isAuthenticated) {
      let token = await getAccessTokenSilently();
      console.log(token);
    } else {
      console.log("no user logged in");
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <div>
      <header className="centered">
        <img className="logo" src={logo} alt="rocket" />

        <Outlet />

        {isAuthenticated ? (
          <>
            <p>Welcome back user!</p>
            {location.pathname !== "/" ? null : (
              <Link to="/profile">Profile & Form</Link>
            )}

            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>
          </>
        ) : (
          <button onClick={() => loginWithRedirect()}>Log In</button>
        )}
        <Fruit />
      </header>
    </div>
  );
}

export default App;
