import React from "react";
import { Link } from "react-router-dom";

export default function Resturent() {
  return (
    <div className="p-5">
      <h2>Welcom To My Resturent</h2>
      <h3 className="pt-2">1. Salad data</h3>
      <Link to="/restaurant/salad" className="text-black">
        Salad
      </Link>
      <br></br>
      <h3 className="pt-3">2. Pizza data</h3>
      <Link to="/restaurant/pizza" className="text-black">
        Pizza
      </Link>
      <br></br>
      <h3 className="pt-3">3. Onion data</h3>
      <Link to="/restaurant/onion" className="text-black">
        Onion
      </Link>
      <br></br>
    </div>
  );
}
