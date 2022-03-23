//Router
import React from "react";
import { Link } from "react-router-dom";

export default function Example3() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/ex31">Home Ex3</Link>
        </li>
        <li>
          <Link to="/ex32">Product Ex3</Link>
        </li>
        <li>
          <Link to="/ex33">Blog Ex3</Link>
        </li>
      </ul>
    </div>
  );
}
