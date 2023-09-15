import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState("0");

  const plusCount = () => {
    setCount(count + 1);
  };

  const minusCount = function () {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={plusCount} className="pr-2">
        плюс
      </button>
      <button onClick={minusCount}>минус</button>
    </div>
  );
}

export default Counter;
