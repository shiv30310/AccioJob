function Button({ operand, number1, number2, setResult }) {
  function handleClick() {
    if (number1 && number2) {
      number1 = parseInt(number1);
      number2 = parseInt(number2);

      switch (operand) {
        case "+":
          setResult(`Result: ${number1 + number2}`);
          break;
        case "-":
          setResult(`Result: ${number1 - number2}`);
          break;
        case "*":
          setResult(`Result: ${number1 * number2}`);
          break;
        case "/":
          setResult(`Result: ${number1 / number2}`);
          break;
        default:
          setResult("Not Valid!");
          break;
      }
    } else {
      if (number1 == "" && number2 == "") {
        setResult("Num1 & Num2 Cannot be empty");
      } else if (number1 == "") {
        setResult("Num1 Cannot be empty");
      } else {
        setResult("Num2 Cannot be empty");
      }
    }
  }
  return (
    <button className="btn" onClick={handleClick}>
      {operand}
    </button>
  );
}

export default Button;
