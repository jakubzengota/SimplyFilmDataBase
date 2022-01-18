import './App.css';
import { useState } from "react" 

function App() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [year, setYear] = useState("");
  const [country, setCountry] = useState("");

  const displayInfo = () => {
    console.log(name + type + year + country);
  };
  return (
    <div className="App">
      <div className="information">
        <label>Nazwa filmu:</label>
        <input 
          type="text" 
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Gatunek:</label>
        <input type="text" 
          onChange={(event) => {
            setType(event.target.value);
          }}
        />
        <label>Rok produkcji:</label>
        <input type="number"
          onChange={(event) => {
            setYear(event.target.value);
          }}
        />
        <label>Kraj wydania:</label>
        <input type="text"
          onChange={(event) => {
            setCountry(event.target.value);
          }}
        />
        <button>Dodaj film</button>
      </div>
    </div>
  );
}

export default App;
