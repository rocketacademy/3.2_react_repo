import { useState, useEffect } from "react";
import axios from "axios";
import FruitCard from "./FruitCard";
import Form from "./Form";

export default function Fruit() {
  let [fruitData, setFruitData] = useState([]);

  const callAPI = async () => {
    let data = await axios.get("http://localhost:8080/fruit");
    console.log(data);
    setFruitData(data.data.fruit);
  };

  useEffect(() => {
    callAPI();
  }, []);

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {fruitData && fruitData.length > 0 ? (
          fruitData.map((fruit) => (
            <div key={fruit.id} style={{ margin: "20px" }}>
              <FruitCard
                name={fruit.name}
                description={fruit.description}
                colour={fruit.colour}
                price={fruit.price}
                stock={fruit.stock}
                image_url={fruit.image_url}
              />
            </div>
          ))
        ) : (
          <p>No data here</p>
        )}
      </div>
      <Form />
    </div>
  );
}
