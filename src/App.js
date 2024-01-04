import logo from "./logo.svg";
import "./App.css";
import NASACounter from "./NASAcounter";
import { ButtonCounter, ButtonCounterCustomHook } from "./ButtonCounter";
import { HoverCounter, HoverCounterCustomHook } from "./HoverCounter";
import {
  ButtonCounterWithCounter,
  HoverCounterWithCounter,
  ButtonCounterWithFunctionCounter,
  HoverCounterWithFunctionCounter,
} from "./HOCs";

function App() {
  return (
    <>

      <NASACounter />
      <h6>NASACounter is not related to below ones</h6>
      <h3>Normal Counters</h3>
      <ButtonCounter />
      <HoverCounter />

      <h3>Counters Using Class Component HOC</h3>
      <ButtonCounterWithCounter />
      <HoverCounterWithCounter />
      <h3>Counters Using Functional Component HOC</h3>
      <ButtonCounterWithFunctionCounter />
      <HoverCounterWithFunctionCounter />
      <h3>Counters Using custom hook </h3>

      <ButtonCounterCustomHook />
      <HoverCounterCustomHook />
    </>
  );
}

export default App;
