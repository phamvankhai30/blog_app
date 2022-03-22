// useEffect
import React, { useEffect, useState } from "react";
import "./example2.css";
export default function Example2() {
  const [count, setCount] = useState(0);
  useEffect(function () {
    setTimeout(function () {
      setCount((count) => count + 1);
    }, 1000);
  });
  return (
    <div>
      <h1 className="ex2">I've rendered {count} times !</h1>
    </div>
  );
}
