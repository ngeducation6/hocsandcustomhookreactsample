import React, { useState } from "react";

function useCounter(incrementValue) {
  const [count, setCount] = useState(0);
  const handleIncrement = () =>
    setCount((prevCount) => prevCount + incrementValue);
  return { count, handleIncrement };
}

export default useCounter;
