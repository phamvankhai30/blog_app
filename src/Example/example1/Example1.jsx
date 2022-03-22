// useState
import React, { useState } from "react";
import "./example1.css";
export default function Example1() {
  const [counter, setCounter] = useState(1);
  const congmot = function () {
    setCounter(counter + 1);
  };
  const trumot = function () {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1 className="title">couter</h1>
      <div className="example1">
        <div>
          <button className="btntru" onClick={trumot}>
            -
          </button>
        </div>
        <div className="ketqua">
          <h1>{counter}</h1>
        </div>
        <div>
          <button className="btncong" onClick={congmot}>
            +
          </button>
        </div>
      </div>
    </>
  );
}
