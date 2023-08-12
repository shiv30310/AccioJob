import { useState } from "react";
import Button from "./button";

const TypesOfButtons = ["+", "-", "*", "/"];

function Calculator() {
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [result, setResult] = useState("");
  return (
    <div className="container">
      <div className="title">
        <h1> React Calculator</h1>
      </div>
      <input
        type="number"
        className="number"
        placeholder="Number1"
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        className="number"
        placeholder="Number2"
        onChange={(e) => setNum2(e.target.value)}
      />

      <div className="buttons">
        {TypesOfButtons.map((btn, index) => (
          <Button
            key={index}
            operand={btn}
            number1={num1}
            number2={num2}
            setResult={setResult}
          />
        ))}
      </div>

      <div className="msg">
        {num1 && num2 ? (
          <div className="success">Success!</div>
        ) : (
          <div className="error">Error!</div>
        )}
      </div>
      <div className="result">{result}</div>
    </div>
  );
}

export default Calculator;
