import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { addSymbol, calculateResult, clearField } from "./calculatorSlice";

const Calculator = () => {
  const dispatch = useDispatch();
  const { symbol, result } = useSelector(
    (state: RootState) => state.calculator
  );

  return (
    <>
      <div>
        <div>
          <div>Expression: {symbol}</div>
          <div>Result: {result}</div>
        </div>
        <div>
          <button onClick={() => dispatch(addSymbol("1"))}>1</button>
          <button onClick={() => dispatch(addSymbol("2"))}>2</button>
          <button onClick={() => dispatch(addSymbol("3"))}>3</button>
          <button onClick={() => dispatch(addSymbol("4"))}>4</button>
          <button onClick={() => dispatch(addSymbol("5"))}>5</button>
          <button onClick={() => dispatch(addSymbol("6"))}>6</button>
          <button onClick={() => dispatch(addSymbol("7"))}>7</button>
          <button onClick={() => dispatch(addSymbol("8"))}>8</button>
          <button onClick={() => dispatch(addSymbol("9"))}>9</button>
          <button onClick={() => dispatch(addSymbol("0"))}>0</button>
          <button onClick={() => dispatch(addSymbol("+"))}>+</button>
          <button onClick={() => dispatch(addSymbol("-"))}>-</button>
          <button onClick={() => dispatch(addSymbol("*"))}>*</button>
          <button onClick={() => dispatch(addSymbol("/"))}>/</button>
          <button onClick={() => dispatch(clearField())}>Clear</button>
          <button onClick={() => dispatch(calculateResult())}>=</button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
