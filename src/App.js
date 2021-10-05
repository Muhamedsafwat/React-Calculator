import "./index.css";
import { useState } from "react";
function App() {
  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button
          onClick={() => {
            updateClac(i.toString());
          }}
          key={i}
        >
          {i}
        </button>
      );
    }
    return digits;
  };
  const [calc, setCalc] = useState("");
  const ops = ["/", "*", "+", "-", "."];

  const updateClac = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1))) ||
      (calc.includes(".") && value === ".")
    ) {
      return;
    }
    setCalc(calc + value);
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const undo = () => {
    if (calc === "0") {
      return;
    }
    const undoed = calc.slice(0, -1);
    setCalc(undoed);
  };

  const ac = () => {
    setCalc("");
  };
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">{calc}</div>
        <div className="buttons">
          <button
            onClick={() => {
              updateClac("/");
            }}
            className="op"
          >
            /
          </button>
          <button
            onClick={() => {
              updateClac("*");
            }}
            className="op"
          >
            X
          </button>
          <button
            onClick={() => {
              updateClac("+");
            }}
            className="op"
          >
            +
          </button>
          <button
            onClick={() => {
              updateClac("-");
            }}
            className="op"
          >
            -
          </button>
          <button onClick={undo} className="op">
            DEL
          </button>
          <button onClick={ac} className="op">
            AC
          </button>
          {createDigits()}
          <button
            onClick={() => {
              updateClac("0");
            }}
          >
            0
          </button>
          <button
            onClick={() => {
              updateClac(".");
            }}
          >
            .
          </button>
          <button className="eq" onClick={calculate}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
