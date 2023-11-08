import "./App.css";
import Form from "./Form";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function UserProfile() {
  const { user, isAuthenticated } = useAuth0();

  return (
    <div>
      <header>
        <Link to="/">Home</Link>
        {isAuthenticated && (
          <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        )}
        <Form />
      </header>
    </div>
  );
}

export default UserProfile;
