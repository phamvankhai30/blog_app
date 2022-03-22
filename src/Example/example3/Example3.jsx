//Router
import React from "react";
import { Link } from "react-router-dom";

export default function Example3() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/homeex3">Home Ex3</Link>
        </li>
        <li>
          <Link to="/productex3">Product Ex3</Link>
        </li>
        <li>
          <Link to="/blogex3">Blog Ex3</Link>
        </li>
      </ul>
    </div>
  );
}
