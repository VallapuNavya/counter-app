import { useState } from "react";
import "./BMICalculator.css";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    if (!height || !weight) {
      alert("Enter both height and weight");
      return;
    }

    const h = height / 100; // cm to meters
    const bmiValue = (weight / (h * h)).toFixed(2);
    setBmi(bmiValue);

    if (bmiValue < 18.5) setCategory("Underweight");
    else if (bmiValue < 25) setCategory("Normal");
    else if (bmiValue < 30) setCategory("Overweight");
    else setCategory("Obese");
  };

  return (
    <div className="bmi-container">
      <h2>BMI Calculator</h2>

      <input
        type="number"
        placeholder="Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />

      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />

      <button onClick={calculateBMI}>Calculate BMI</button>

      {bmi && (
        <div className="result">
          <p><b>BMI:</b> {bmi}</p>
          <p><b>Category:</b> {category}</p>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
