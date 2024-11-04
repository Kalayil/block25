import React, { useState } from 'react';
import './index.css';

const Color = ({ color, setSelectedColor, isSelected }) => {
  return (
    <div
      className={`${color} ${isSelected ? 'selected' : ''}`}
      onClick={() => setSelectedColor(color)}
    ></div>
  );
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected:</div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="yellow" setSelectedColor={setSelectedColor} isSelected={selectedColor === "yellow"} />
        <Color color="green" setSelectedColor={setSelectedColor} isSelected={selectedColor === "green"} />
        <Color color="red" setSelectedColor={setSelectedColor} isSelected={selectedColor === "red"} />
      </div>
    </div>
  );
};

export default App;



