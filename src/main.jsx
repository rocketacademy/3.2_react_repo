import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";

import UserProfile from "./UserProfile";
import { Auth0Provider } from "@auth0/auth0-react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/profile",
    element: <UserProfile />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain={import.meta.env.VITE_SOME_DOMAIN}
    clientId={import.meta.env.VITE_SOME_CLIENT_ID}
    authorizationParams={{
      redirect_uri: "http://localhost:5173",
      audience: import.meta.env.VITE_SOME_AUDIENCE,
      scope: import.meta.env.VITE_SOME_SCOPE,
    }}
  >
    <RouterProvider router={router} />
  </Auth0Provider>
);
