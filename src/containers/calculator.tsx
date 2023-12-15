import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { addSymbol, calculateResult, clearField } from "./calculatorSlice";
import {
  BatteryHalf,
  Wifi2,
  BarChartFill,
  Dash,
  Plus,
  X,
} from "react-bootstrap-icons";

const Calculator = () => {
  const dispatch = useDispatch();
  const { symbol, result } = useSelector(
    (state: RootState) => state.calculator
  );

  return (
    <div className="telephone shadow p-4 rounded mx-auto mt-5">
      <div className="d-flex justify-content-between">
        <div className="fw-bold telephone_time">00:40</div>
        <div className="d-flex align-items-center">
          <div>
            <BarChartFill size={10} />
          </div>
          <div className="pb-1 mx-1">
            <Wifi2 size={16} />
          </div>
          <div>
            <BatteryHalf />
          </div>
        </div>
      </div>
      <div className="calculator_operation d-flex flex-column align-items-end mt-5 mb-4">
        <h1 className="calculator_result">{result}</h1>
        <div className="calculator_symbols">{symbol}</div>
      </div>
      <div className="calculator">
        <div className="d-flex justify-content-between mb-4">
          <button
            className="calculator_symbol calculator_clear"
            onClick={() => dispatch(clearField())}
          >
            AC
          </button>
          <button
            className="calculator_symbol calculator_operator"
            onClick={() => dispatch(addSymbol("/"))}
          >
            /
          </button>
        </div>
        <div className="d-flex justify-content-between mb-4">
          <button
            className="calculator_symbol"
            onClick={() => dispatch(addSymbol("7"))}
          >
            7
          </button>
          <button
            className="calculator_symbol"
            onClick={() => dispatch(addSymbol("8"))}
          >
            8
          </button>
          <button
            className="calculator_symbol"
            onClick={() => dispatch(addSymbol("9"))}
          >
            9
          </button>
          <button
            className="calculator_symbol calculator_operator"
            onClick={() => dispatch(addSymbol("*"))}
          >
            <X size={30} />
          </button>
        </div>
        <div className="d-flex justify-content-between mb-4">
          <button
            className="calculator_symbol"
            onClick={() => dispatch(addSymbol("4"))}
          >
            4
          </button>
          <button
            className="calculator_symbol"
            onClick={() => dispatch(addSymbol("5"))}
          >
            5
          </button>
          <button
            className="calculator_symbol"
            onClick={() => dispatch(addSymbol("6"))}
          >
            6
          </button>
          <button
            className="calculator_symbol calculator_operator"
            onClick={() => dispatch(addSymbol("-"))}
          >
            <Dash size={33} />
          </button>
        </div>
        <div className="d-flex justify-content-between mb-4">
          <button
            className="calculator_symbol"
            onClick={() => dispatch(addSymbol("1"))}
          >
            1
          </button>
          <button
            className="calculator_symbol"
            onClick={() => dispatch(addSymbol("2"))}
          >
            2
          </button>
          <button
            className="calculator_symbol"
            onClick={() => dispatch(addSymbol("3"))}
          >
            3
          </button>
          <button
            className="calculator_symbol calculator_operator"
            onClick={() => dispatch(addSymbol("+"))}
          >
            <Plus size={30} />
          </button>
        </div>
        <div className="d-flex justify-content-between">
          <button
            className="calculator_symbol"
            onClick={() => dispatch(addSymbol("0"))}
          >
            0
          </button>
          <button
            className="calculator_symbol calculator_operator calculator_equal"
            onClick={() => dispatch(calculateResult())}
          >
            =
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Calculator;
