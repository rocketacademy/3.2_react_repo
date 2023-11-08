import logo from "/logo.png";
import "./App.css";
import Fruit from "./Fruit.jsx";

function App() {
  return (
    <div>
      <header>
        <img className="logo" src={logo} alt="rocket" />
        <Fruit />
      </header>
    </div>
  );
}

export default App;
