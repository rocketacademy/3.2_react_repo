import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const { isAuthenticated, getAccessTokenSilently, loginWithRedirect } =
    useAuth0();

  const navigate = useNavigate();

  const [accessToken, setAccessToken] = useState("");

  const checkUser = async () => {
    if (isAuthenticated) {
      let token = await getAccessTokenSilently();
      setAccessToken(token);
    } else {
      loginWithRedirect();
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [colour, setColour] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [image_url, setImage_url] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let request = await axios.post(
      "http://localhost:8080/fruit",
      {
        name,
        description,
        colour,
        price,
        stock,
        image_url,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    navigate("/");
    console.log(request);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />

        <label>Colour:</label>
        <input
          type="text"
          name="colour"
          value={colour}
          onChange={(e) => setColour(e.target.value)}
        />
        <br />

        <label>Image URL:</label>
        <input
          type="text"
          name="image_url"
          value={image_url}
          onChange={(e) => setImage_url(e.target.value)}
        />
        <br />

        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />

        <label>Stock:</label>
        <input
          type="number"
          name="stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
