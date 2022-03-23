//useCallback
import React, { useCallback, useState } from "react";

export default function Example7() {
  const [count, setCount] = useState(0);

  const handleIncrease = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);
  return (
    <div>
      <button onClick={handleIncrease}>Click me</button>
      <h1>{count}</h1>
    </div>
  );
}
